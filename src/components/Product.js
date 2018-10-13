import React from 'react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';

import {
  Grid,
} from 'semantic-ui-react';
export default class Product extends React.Component {

  render() {
    return(
      <Grid.Column>
        <div>
          <div>{this.props.values.image}!</div>
          <div>{this.props.values.description}</div>
          <div>{this.props.values.price}</div>
        </div>
      </Grid.Column>
    )
  }
}
