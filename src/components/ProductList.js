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
  
  render() {
    var products = []
      for (let i = 0; i < 10; i++) {
        products.push({name: "product", description: "heya ekrjewkwe jrkwej", price: 234})
      };

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
