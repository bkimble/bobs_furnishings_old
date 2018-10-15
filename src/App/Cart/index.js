import React from 'react';
import AppWrapper from 'components/AppWrapper';
import {
    Header,
    Segment,
    List,
    Image,
    Input,
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

    render() {
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

        return(
            <AppWrapper>
                <Header as='h2' inverted textAlign='center'>
          Shopping Cart
                </Header>
                <Form>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Del</Table.HeaderCell>
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
            </AppWrapper>
	    );
    }
}
