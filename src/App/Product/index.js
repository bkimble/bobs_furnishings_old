import React from 'react';
import { Segment, Message, Grid, Image, Header, List} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import AppWrapper from 'components/AppWrapper';
import VariationPicker from 'components/VariationPicker';

import AddToCartButton from 'components/AddToCartButton';
import { withRouter } from 'react-router-dom';

import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import request from 'utils/request';



@inject('routing')
@observer
@withRouter
class ProductDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    let state = {
      product: this.props.product,
      variations: this.props.variations,
      productLoaded: false,
      variationsLoaded: false
    }
    
    if (state.product !== undefined) {
      state.productLoaded = true
    }
    if (state.variations !== undefined) {
      state.variationsLoaded = true
    }

    this.state = state
    
    this.switchVariation = this.switchVariation.bind(this)
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
    const attributes = []
    const origAttributes = JSON.parse(this.state.product.attributes_json)
    for(var k in origAttributes) {
      attributes.push([k, origAttributes[k]])
    }
    return attributes
  }
  
  switchVariation(product) {
    this.setState({
      product
    })
  }
  
  render() {
    if (this.state.productLoaded) {
      return (
          <Grid className="productDetail">
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={9}>
          <Header as='h1'>{this.state.product.name}</Header>
          <Header as='h3'>${this.state.product.price}</Header>
            <Image src={require(`assets/product_images/${this.state.product.img}`)} rounded/>
        
            <VariationPicker variations={this.state.variations} switchVariation={this.switchVariation} selected={this.state.product} product={this.state.product}/>

            {this.state.product.description}    
          </Grid.Column>
          <Grid.Column width={3}>
            {this.getAttributes().map(a => {
              return ( 
                <div>{a[0]} : {a[1]}</div>
              )
            })}
            <AddToCartButton product={this.state.product} />

          </Grid.Column>
          </Grid>
    )} else {
      return(
        <div>Loading ...</div>
      )
    }
  }
}


@inject('routing')
@observer
@withRouter
export default class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
    
  render() {
    const {location } = this.props.routing
    
    const product = this.props.location.state ? this.props.location.state.product : undefined
    const variations = this.props.location.state ? this.props.location.state.variations : undefined
    
    return (
    <AppWrapper>
    <Header as='h2' inverted textAlign='center'>
    </Header>
    <button onClick={() => goBack()}>Go Back</button>
    <ProductDetail product={product} variations={variations} location={location.pathname} />
    </AppWrapper>
  );
  }
}
