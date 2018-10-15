import React from 'react';

import { observer, inject } from 'mobx-react';

@inject('routing')
@inject('cart')
@observer
export default class MiniCart extends React.Component {
  render() {
		return(
	       <span className="miniCart" onClick={() => this.props.routing.push('/cart')} >Cart ({this.props.cart.count} items)</span>
	    )
  }
}
