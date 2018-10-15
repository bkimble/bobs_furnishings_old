import React from 'react';
import AppWrapper from 'components/AppWrapper'
import {
  Header,
  Segment,
  List,
  Image,
  Input,
  Table,
  Button
} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

@inject('routing')
@inject('cart')
@observer
export default class Cart extends React.Component {
  
  removeItem(sku) {
    this.props.cart.remove(sku)
  }
  
  changeQty(sku, e) {
    this.props.cart.update(sku, e.target.value);
  }

  render() {
    const items = this.props.cart.items.map(item =>
          <Table.Row>
            <Table.Cell selectable negative textAlign="center" width="one">
              <div onClick={() => { this.removeItem(item.sku) }}>X</div>
            </Table.Cell>
            <Table.Cell><Image avatar src={require(`assets/product_images/${item.img}`)} /> {item.name}</Table.Cell>
            <Table.Cell>{item.price}</Table.Cell>
      <Table.Cell width="one"><Input placeholder={item.qty} onChange={this.changeQty.bind(this, item.sku) } /></Table.Cell>
          </Table.Row>
    )

		return(
      <AppWrapper>
        <Header as='h2' inverted textAlign='center'>
          Shopping Cart
        </Header>
      
    <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Del</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Qty</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {items}
        </Table.Body>
      </Table>

      </AppWrapper> 
	    )
  }
}
