import React from 'react';
import { Segment, Message, Grid, Image, Header } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import PageCenter from 'components/PageCenter';
import LogoTitle from 'components/LogoTitle';
import AppWrapper from 'components/AppWrapper';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';

@inject('routing', 'me')
@observer
export default class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <AppWrapper>
    <Header as='h2' inverted textAlign='center'>
      Product
    </Header>
      
    <Grid className="productDetail">
      <Grid.Column width={4}>
        image here<br />
        image here<br />
        image here<br />
      </Grid.Column>
      <Grid.Column width={9}>
        content here<br />
        content here<br />
        content here<br />
      </Grid.Column>
      <Grid.Column width={3}>
        content here<br />
        content here<br />
        content here<br />
      </Grid.Column>
    </Grid>
    </AppWrapper>
  );
  }
}
