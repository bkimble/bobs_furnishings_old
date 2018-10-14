import React from 'react';
import { Segment, Message, Grid } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import PageCenter from 'components/PageCenter';
import LogoTitle from 'components/LogoTitle';

import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';

@inject('routing')
@observer
export default class Cart extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <div>
      Cart Page here
    </div>
  );
  }
}
