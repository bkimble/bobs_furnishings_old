import React from 'react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';
import Product from 'components/Product';
import request from 'utils/request';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
  Message,
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
            groupedProducts: {},
	    isLoaded: false,
	    err: null
        };
    }

    groupProductsByProductId(products) {
        const grouped = {};
        products.forEach(product => {
            if (!grouped[product.product_id]) {
                grouped[product.product_id] = [];
            }
            grouped[product.product_id].push(product);
        });
        return grouped;
    }

    componentDidMount() {
        request({
            method: 'GET',
            path: '/api/products'
        })
            .then((result) => {
                this.setState({products: result, groupedProducts: this.groupProductsByProductId(result), isLoaded: true});
            })
            .catch((err) => {
                this.setState({
                    err,
                    isLoaded: true
                });
            });
    }

    render() {
	  const { err, isLoaded } = this.state;
        const products = [...this.state.products];

	  if (err) {
		  return (
        <Message
          error
          header='Error'
          content={err.message}
        />
		  )      
	  } else if (!isLoaded) {
		  return <div>Loading...</div>;
	  } else {
	      const finalProducts = [];
	      while (products.length) {
	          finalProducts.push(products.splice(0, 3));
	      }
	      return(
	        <div>
	          <Grid columns={3} divided>
	          {finalProducts.map((row, index) => {
	            return (
	              <Grid.Row key={index} textAlign="center" stretched>
	              {row.map(product => {
                                        return (<Product values={product} variations={this.state.groupedProducts[product.product_id]} key={product.product_variation_id} />);
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
