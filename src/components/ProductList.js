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
      fetch("/products")
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
	  const { error, isLoaded, products } = this.state;
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
	          <Grid celled columns={3}>
	          {finalProducts.map(row => {
	            return (
	              <Grid.Row>
	              {row.map(product => {
	                return (<Product values={product} />)
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
