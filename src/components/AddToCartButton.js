import React from 'react';
import { observer, inject } from 'mobx-react';

import {
    Button
} from 'semantic-ui-react';

@inject('cart')
@observer
export default class AddToCartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showingMessage: false,
          timer: 0
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(item) {
        this.props.cart.add(item);
        this.showConfirmation()
    }
    
    showConfirmation() {
      this.setState({showingMessage: true})
        setTimeout(() => {
            this.setState({
              showingMessage: false
          })
      }, 1000);
    }
    
    getMessage() {
      if (this.state.showingMessage) {
        return (
          <Button primary disabled>Added to Cart!</Button>
        )
      }
    }
    
    getButton() {
      if (!this.state.showingMessage) {
        return (
              <Button primary onClick={() => { this.addToCart(this.props.product); }}>Add to Cart</Button>
        )
      }
    }
    
    render() {
      const message = this.getMessage();
      const button = this.getButton();
      return(
        <div>
          {button}
          {message}
        </div>
      );
    }
}
