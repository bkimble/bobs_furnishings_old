import React from 'react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';
import Product from 'components/Product'

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
export default class ProductList extends React.Component {
	constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      products: [],
	    isLoaded: false,
	    error: null
    }
  }
	
  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({products: result, isLoaded: true});
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true
          });
        }
      )
  }
  render() {
	  const { error, isLoaded } = this.state;
    let products = [...this.state.products];
    
	  if (error) {
		  return <div>Error: {error.message}</div>;
	  } else if (!isLoaded) {
		  return <div>Loading...</div>;
	  } else {
	      let finalProducts = [];
	      while (products.length) {
	          finalProducts.push(products.splice(0, 3))
	      }
	      return(
	        <div>
	          <Grid columns={3} divided>
	          {finalProducts.map((row, index) => {
	            return (
	              <Grid.Row key={index} textAlign="center" stretched>
	              {row.map(product => {
                  return (<Product values={product} key={product.product_variation_id} />)
	              })}
	              </Grid.Row>
	            );
	          })}
	          </Grid>
	          </div>
	      );
	  }
  }
}
