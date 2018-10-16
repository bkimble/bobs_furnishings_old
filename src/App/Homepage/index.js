import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/lib/Alert';
import ProductList from 'components/ProductList';
import AppWrapper from 'components/AppWrapper';
import { observer, inject } from 'mobx-react';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Breadcrumb,
    Responsive,
    Segment,
    Sidebar,
    Visibility
} from 'semantic-ui-react';

@inject('routing', 'me')
@observer
class DesktopContainer extends React.Component {
  state = {};
  render() {
      return (
          <AppWrapper>
              <Header as='h2' inverted textAlign='center'>
          Products
              </Header>
                <Grid className="breadcrumbs">
                  <Grid.Row>
                    <Grid.Column textAlign="left">
                      <Breadcrumb size='huge'>
                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                      </Breadcrumb>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
        
        
              <ProductList addToCart={this.props.addToCart} />
          </AppWrapper>
      );
  }
}

export default DesktopContainer;
