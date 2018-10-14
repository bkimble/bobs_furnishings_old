import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Dropdown, Icon, Menu, Image } from 'semantic-ui-react';
import logoInverted from 'assets/logo.svg';
import MiniCart from 'components/MiniCart';

import logo from 'assets/logo.png';
import 'assets/application.less';

@inject('cart')
@withRouter
@observer
export default class AppWrapper extends React.Component {
  render() {
    return (
      <Container align='center'>
        <MiniCart />
        <div className="header"></div>
        <Image src={logo} align='center' />
        {this.props.children}
      </Container>
    );
  }
}
