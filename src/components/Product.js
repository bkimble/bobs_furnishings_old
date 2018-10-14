import React from 'react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';
import AddToCartButton from 'components/AddToCartButton';

import {
  Grid,
  Image,
  Card,
  Icon
} from 'semantic-ui-react';


export default class Product extends React.Component {
  
  render() {
    return(
      <Grid.Column key={this.props.values.product_variation_id} textAlign="bottom">
        <Card height="200px">
          <Image src={require(`assets/product_images/${this.props.values.img}`)} rounded/>
          <Card.Content>
            <Card.Header>{this.props.values.name}</Card.Header>
            <Card.Meta>${this.props.values.price}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <AddToCartButton addToCart={this.props.addToCart} />
          </Card.Content>
        </Card>      
      </Grid.Column>
    )
  }
}
