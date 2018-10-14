import React from 'react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';

import {
  Grid,
  Image,
  Card,
  Button
} from 'semantic-ui-react';

export default class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
       <Button primary onClick={() => { this.props.addToCart(this.props.sku) }}>Add to Cart</Button>
    )
  }
}
