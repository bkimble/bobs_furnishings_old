import React from 'react';
import { Segment, Message, Grid, Image, Header, List} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import AppWrapper from 'components/AppWrapper';
import AddToCartButton from 'components/AddToCartButton';

import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';

@inject('routing')
@observer
class VariationPicker extends React.Component {
  constructor(props) {
    super(props);
    this.facetWhitelist = {
      'color':'img'
    }
  }
  
  // <div onClick={() => { this.props.routing.replace({pathname:`/product/${v.sku}`, state: { product: v, variations: this.props.variations}})    }}>{attributes[k]}</div>
  
  getFacets() {
    let facets = {}
    this.props.variations.forEach(v => {
      const attributes = JSON.parse(v.attributes_json)
      for(var k in attributes) {
        let facetField = this.facetWhitelist[k]
        if (facetField !== undefined) {
          if (!facets[k]) {
            facets[k] = []
          }
          
          let thisLabel;

          if (facetField == 'img') {
            thisLabel = <Image avatar src={require(`assets/product_images/${v.img}`)} />
          } else {
            thisLabel = attributes[k]
          }
          
          const className = v.sku == this.props.selected.sku ? 'selected' : '';
          facets[k].push(
            <List.Item key={v.sku} className={className}>
              <List.Content>
                <div onClick={() => {this.props.switchVariation(v)}}>{thisLabel}</div>
              </List.Content>
            </List.Item>
          )
        }
      }
    })
    
    return facets;
  }
  
  render() {
    console.log("hey")
    const facets = this.getFacets()
    let facetGroups = []
    for(let k in facets) {
      facetGroups.push(
        <div key={k}>{k}: <List horizontal className="productVariations" key={k}>{facets[k]}</List></div>
      )
    }    
    return (<div>{facetGroups}</div>
    )
  }
}



@inject('routing')
@observer
export default class ProductPage extends React.Component {
  constructor(props, context) {
    console.log("constructor!")
    super(props, context);
    this.state = {
      product: this.props.location.state.product,
      variations: this.props.location.state.variations
    }
    this.switchVariation = this.switchVariation.bind(this)
  }
  
  componentWillMount() {
       this.unlisten = this.props.history.listen(location => {
           this.setState({location});
       });
   }

   componentWillUnmount() {
       this.unlisten();
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
    return (
    <AppWrapper>
    <Header as='h2' inverted textAlign='center'>
    </Header>
      
    <Grid className="productDetail">
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={9}>
      <Header as='h1'>{this.state.product.name}</Header>
      <Header as='h3'>${this.state.product.price}</Header>
        <Image src={require(`assets/product_images/${this.state.product.img}`)} rounded/>
        <VariationPicker variations={this.props.location.state.variations} switchVariation={this.switchVariation} selected={this.state.product}/>

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
    </AppWrapper>
  );
  }
}
