import React from 'react';

export default class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }
  
  toggleCart() {
    console.log("toggle!")
    this.setState({
      expanded: !this.expanded 
    })
  }
  
  render() {
    return(
       <span className="miniCart" onClick={this.toggleCart}>Cart ({this.props.cart.length} items)</span>
    )
  }
}
