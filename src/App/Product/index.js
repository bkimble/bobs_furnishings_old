import React from 'react';
import { Segment, Message, Grid, Image, Header } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import PageCenter from 'components/PageCenter';
import LogoTitle from 'components/LogoTitle';
import AppWrapper from 'components/AppWrapper';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';


class VariationPicker extends React.Component {
  constructor(props) {
    super(props);
    this.facetWhitelist = ["color"]
  }
  
  getFacets() {
    let facets = {}
    this.props.variations.forEach(v => {
      const attributes = JSON.parse(v.attributes_json)
      for(var k in attributes) {
        if (this.facetWhitelist.indexOf(k) !== -1) {
          if (!facets[k]) {
            facets[k] = {}
          }
          facets[k][attributes[k]] = v
        }
      }
    })
    return facets;
  }
  
  render() {
    const facets = this.getFacets()
    console.log(facets)
    return (
      <div>Variations here</div>
    )
  }
}



@inject('routing', 'me')
@observer
export default class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: this.props.location.state.product,
      variations: this.props.location.state.variations
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


  render() {
    return (
    <AppWrapper>
    <Header as='h2' inverted textAlign='center'>
    </Header>
      
    <Grid className="productDetail">
      <Grid.Column width={4}>
        <VariationPicker variations={this.props.location.state.variations} />
      </Grid.Column>
      <Grid.Column width={9}>
      <Header as='h1'>{this.state.product.name}</Header>
      <Header as='h3'>${this.state.product.price}</Header>
        <Image src={require(`assets/product_images/${this.state.product.img}`)} rounded/>
        {this.state.product.description}
      </Grid.Column>
      <Grid.Column width={3}>
        {this.getAttributes().map(a => {
          return ( 
            <div>{a[0]} : {a[1]}</div>
          )
        })}
      </Grid.Column>
    </Grid>
    </AppWrapper>
  );
  }
}
