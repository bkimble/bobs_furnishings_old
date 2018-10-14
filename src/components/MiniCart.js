import React from 'react';

export default class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.toggleCart = this.toggleCart.bind(this);
  }
  
  toggleCart() {
    this.setState({
      expanded: !this.state.expanded 
    })
  }
 
  render() {
	  if (this.state.expanded) {
  		return(
			<span className="miniCart" onClick={this.toggleCart}>
			<table>
			{this.props.cart.map(product => {
			 return (
				<tr><td>{product.name}</td><td>Qty 1</td><td>${product.price}</td></tr>
			 )
			 })}
			</table>
			</span>
  	    )	  	
	  } else {
		return(		
	       <span className="miniCart" onClick={this.toggleCart}>Cart ({this.props.cart.length} items)</span>
	    )
  }
}
}
