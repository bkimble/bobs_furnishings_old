import React from 'react';
import AppWrapper from 'components/AppWrapper'
import {
  Header,
  Segment,
  List,
  Image,
  Button
} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

@inject('routing')
@inject('cart')
@observer
export default class Cart extends React.Component {
  constructor(props) {
    super(props)
     this.foo = this.foo.bind(this);
  }
  
  foo() {
    console.log(this.props.cart.items)
  }
  
  render() {
    const items = this.props.cart.items.map(item =>
      <List.Item>
        <List.Content floated='right'>
          <Button>Add</Button>
        </List.Content>
        <Image avatar floated="left" src={require(`assets/product_images/${item.img}`)} />
        <List.Content floated="left">{item.name}</List.Content>
        <List.Content floated="left">{item.price}</List.Content>
        <List.Content floated="left">{item.qty}</List.Content>
      </List.Item>
    )

		return(		
      <AppWrapper>
        <Header as='h2' inverted textAlign='center'>
          Shopping Cart
        </Header>
        <Button onClick={this.foo} />
        <Segment inverted>
        <List divided verticalAlign='middle' textAlign="left">
          {items}
        </List>
        </Segment>
      </AppWrapper> 
	    )
  }
}
