import React from 'react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';
import AddToCartButton from 'components/AddToCartButton';
import { observer, inject } from 'mobx-react';

import {
    Grid,
    Image,
    Card,
    Icon
} from 'semantic-ui-react';

@inject('routing')
@observer
export default class Product extends React.Component {
    render() {
        return(
            <Grid.Column key={this.props.values.product_variation_id} textAlign="center">
                <Card fluid={true}>
                    <Image src={require(`assets/product_images/${this.props.values.img}`)} onClick={() => this.props.routing.push({pathname:`/product/${this.props.values.sku}`, state: { product: this.props.values, variations: this.props.variations}})} rounded/>
                    <Card.Content>
                        <Card.Header>{this.props.values.name}</Card.Header>
                        <Card.Meta>${this.props.values.price}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <AddToCartButton product={this.props.values} />
                    </Card.Content>
                </Card>
            </Grid.Column>
        );
    }
}
