import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/lib/Alert';
import ProductList from 'components/ProductList';
import MiniCart from 'components/MiniCart';

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
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';

import logo from 'assets/logo.png';
import nanImage from 'assets/nan.jpg';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });
  
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
    this.addToCart = this.addToCart.bind(this);
  }
  
  addToCart(item) {
    const cart = this.state.cart
    cart.push(item);
    this.setState({
      cart
    })
  }
  
  render() {
    return (
      <Container align='center'>
      <MiniCart cart={this.state.cart} />
      <Image src={logo} align='center' />
      <Header as='h2' inverted textAlign='center'>
        Products
      </Header>
      <ProductList addToCart={this.addToCart} />
      </Container>
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
