import React from 'react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';
import { observer, inject } from 'mobx-react';

import {
    Grid,
    Image,
    Card,
    Button
} from 'semantic-ui-react';

@inject('cart')
@observer
export default class AddToCartButton extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(item) {
        this.props.cart.add(item);
    }

    render() {
        return(
            <Button primary onClick={() => { this.addToCart(this.props.product); }}>Add to Cart</Button>
        );
    }
}
