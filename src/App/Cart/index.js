import React from 'react';
import AppWrapper from 'components/AppWrapper';
import {
    Header,
    Segment,
    List,
    Grid,
    Breadcrumb,
    Image,
    Input,
  Message,
    Container,
    Table,
    Form,
    Button
} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';


@inject('cart')
@observer
class ItemQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: ''
        };
    }

    changeQty(sku, e) {
        const newValue = (e.target.value == '' ? 0 : e.target.value);
        this.props.cart.update(sku, newValue);
    }

    filterValue(e) {
        const goodKeys = [8, 46, 37, 38, 39, 40];
        if (goodKeys.indexOf(e.keyCode) === -1 && (e.keyCode < 48 || e.keyCode > 57)) {
            e.preventDefault();
        }
    }

    render() {
        let className = '';
        if(this.state.error) {
            className = 'error';
        }

        return (
            <Form.Input width={10} placeholder={this.props.item.qty} onKeyDown={this.filterValue} onKeyUp={this.changeQty.bind(this, this.props.item.sku) } className={className} />
        );
    }
}


@inject('routing')
@inject('cart')
@observer
export default class Cart extends React.Component {
    removeItem(sku) {
        this.props.cart.remove(sku);
    }
    
  
    getCart() {
      const items = this.props.cart.items.map(item =>
          <Table.Row>
              <Table.Cell selectable negative textAlign="center" width="one">
                  <div onClick={() => { this.removeItem(item.sku); }}>X</div>
              </Table.Cell>
              <Table.Cell><Image avatar src={require(`assets/product_images/${item.img}`)} /> {item.name}</Table.Cell>
              <Table.Cell textAlign="right">${parseFloat(item.price).toFixed(2)}</Table.Cell>
              <Table.Cell width="two"><ItemQuantity item={item}/></Table.Cell>
          </Table.Row>
      );
      
      return (
                <Grid>
                  <Grid.Row>
                    <Grid.Column size={16}>
                      <Form>
                          <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign="center">Del</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
                                    <Table.HeaderCell>Qty</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {items}
                                <Table.Row>
                                    <Table.Cell width="one"></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell textAlign="right">
                                        <div>Subtotal: ${this.props.cart.total.toFixed(2)}</div>
                                        <div>Tax: $0.00</div>
                                        <div>Shipping: $0.00</div>
                                        <div>Coupons: $0.00</div>
                                        <div>Total:  ${this.props.cart.total.toFixed(2)}</div>
                                    </Table.Cell>
    	                            <Table.Cell width="one"></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                          </Table>
                      </Form>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column size={16} textAlign="right">
                                <Button primary size="huge">Checkout</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
        )
    } 
    
    getEmptyCart() {
      return (
        <Message
          warning
          header='Cart Empty'
          content=' There are no items in your shopping cart.'
        />
     )
    }
      
    render() {
      const {push} = this.props.routing;
        const content = this.props.cart.count == 0 ? this.getEmptyCart() : this.getCart();
        return(
            <AppWrapper>
                <Header as='h2' inverted textAlign='center'>
                  Shopping Cart
                </Header>
                <Grid>
                  <Grid.Row>
                    <Grid.Column textAlign="left">
                      <Breadcrumb size='huge'>
                        <Breadcrumb.Section link onClick={() => { push({pathname: "/"}) }}>Home</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section active>Product Detail</Breadcrumb.Section>
                      </Breadcrumb>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                {content}
            </AppWrapper>
	    );
    }
}
