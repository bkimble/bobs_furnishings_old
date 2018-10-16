import React from 'react';

import { observer, inject } from 'mobx-react';
import {  Image } from 'semantic-ui-react';


import cart from 'assets/cart.png';

@inject('routing')
@inject('cart')
@observer
export default class MiniCart extends React.Component {
    render() {
        return(
	       <span className="miniCart" onClick={() => this.props.routing.push('/cart')} ><Image size="mini" src={cart} align='center' />Cart ({this.props.cart.count} items)</span>
	    );
    }
}
