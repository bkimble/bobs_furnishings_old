import React from 'react';
import { Segment, Message, Grid, Image, Header, List, Breadcrumb} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import AppWrapper from 'components/AppWrapper';
import VariationPicker from 'components/VariationPicker';
import ProductDetail from 'components/ProductDetail'
import AddToCartButton from 'components/AddToCartButton';
import { withRouter } from 'react-router-dom';

import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import request from 'utils/request';

@inject('routing')
@observer
@withRouter
export default class ProductPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {location, push} = this.props.routing;

        const product = this.props.location.state ? this.props.location.state.product : undefined;
        const variations = this.props.location.state ? this.props.location.state.variations : undefined;

        return (
            <AppWrapper>
              <Header as='h2' inverted textAlign='center'>
                Product Details
              </Header>
            <Grid className="breadcrumbs">
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
            <ProductDetail product={product} variations={variations} location={location.pathname} />
            </AppWrapper>
        );
    }
}
