import React from 'react';
import { Segment, Message, Grid, Image, Header, List, Rating} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import Comments from 'components/Comments';

import VariationPicker from 'components/VariationPicker';
import AddToCartButton from 'components/AddToCartButton';
import { withRouter } from 'react-router-dom';
import request from 'utils/request';

@inject('routing')
@observer
@withRouter
export default class ProductDetail extends React.Component {
    constructor(props, context) {
        super(props, context);

        const state = {
            product: this.props.product,
            variations: this.props.variations,
            productLoaded: false,
            variationsLoaded: false
        };

        if (state.product !== undefined) {
            state.productLoaded = true;
        }
        if (state.variations !== undefined) {
            state.variationsLoaded = true;
        }

        this.state = state;

        this.switchVariation = this.switchVariation.bind(this);
    }

    componentWillMount() {
    // Was a product passed in? if not, fetch the product - user is deep linking to this route
        if(this.state.product === undefined) {
            request({
                method: 'GET',
                path: `/api/product/${this.props.match.params.sku}`
            })
                .then((result) => {
                    this.setState({product: result, productLoaded: true});
                })
                .catch((err) => {
                    this.setState({
                        err,
                        productLoaded: true
                    });
                });
        }
    }

    getAttributes() {
        const attributes = [];
        const origAttributes = JSON.parse(this.state.product.attributes_json);
        for(const k in origAttributes) {
            attributes.push([k, origAttributes[k]]);
        }
        return attributes;
    }

    switchVariation(product) {
      this.setState({
            product
        });
    }

    productAttributes() {
      return this.getAttributes().map(a => {
          return (
              <Grid.Row columns={2}>
              <Grid.Column>{a[0]}</Grid.Column>
              <Grid.Column>{a[1]}</Grid.Column>
            </Grid.Row>
          );
      })
    }
    
    render() {
        const attributes = this.productAttributes();
        if (this.state.productLoaded) {
            return (
                <Grid className="productDetail">
                    <Grid.Row>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header as='h1'>{this.state.product.name}</Header>
                        <Header as='h3'>${this.state.product.price}</Header>
                        <Image src={require(`assets/product_images/${this.state.product.img}`)} size="medium" rounded/>
                        <VariationPicker variations={this.state.variations} switchVariation={this.switchVariation} selected={this.state.product} product={this.state.product}/>
                        <Segment basic><Rating maxRating={5} defaultRating={3} icon='star' size='massive' /></Segment>
                        
                        <Segment basic><AddToCartButton product={this.state.product} /></Segment>
                        <Segment basic>
                          <p>
                          <Header>
                            Description
                          </Header>

                          {this.state.product.description}
                        </p>
                          </Segment>
                        <Header>
                          Product Details:
                        </Header>
                        <Grid celled className="attributeGrid"> {attributes}</Grid>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                          <Grid.Column>
                          <Header>
                            Comments
                          </Header>
                          <Comments />
                      </Grid.Column>
                    </Grid.Row>
                        
                </Grid>
            );
        } else if (this.state.err) {
          return (
              <div>{this.state.err}</div>
          );
        } else {
            return(
                <div>Loading ...</div>
            );
        }
    }
}