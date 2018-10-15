import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/lib/Alert';
import ProductList from 'components/ProductList';
import AppWrapper from 'components/AppWrapper'
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

import logo from 'assets/logo.png';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
        <ProductList addToCart={this.props.addToCart} />
      </AppWrapper>
    );
  }
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};


export default ResponsiveContainer
