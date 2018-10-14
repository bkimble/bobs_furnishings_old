import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Dropdown, Icon, Menu, Image } from 'semantic-ui-react';
import logoInverted from 'assets/logo.svg';
import MiniCart from 'components/MiniCart';

import logo from 'assets/logo.png';
import 'assets/application.less';

@inject('me')
@withRouter
@observer
export default class AppWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
    this.addToCart = this.addToCart.bind(this);
  }
  

  addToCart(item) {
    const cart = this.state.cart
    cart.push(item);
    this.setState({cart})
  }

  render() {
    const { me } = this.props;

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        cart: this.state.cart,
        addToCart: this.addToCart
      });
    });
    
    return (
      <Container align='center'>
        <MiniCart cart={this.state.cart} />
        <div className="header"></div>
        <Image src={logo} align='center' />
        {children}
      </Container>
    );
  }
}
