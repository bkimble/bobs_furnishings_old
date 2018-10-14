import 'theme/semantic.less';

import { Provider } from 'mobx-react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router';
import { configure } from 'mobx';
import React from 'react';
import { hot } from 'react-hot-loader';

import Boot from 'components/Boot';

import AuthSwitchRoute from 'components/routes/AuthSwitch';
import Protected from 'components/routes/Protected';

import Homepage from './Homepage';
import Product from './Product'
import Cart from './Cart'

import AuthStore from 'stores/Auth';
import appSession from 'stores/AppSession';
import MeStore from 'stores/Me';

configure({
  enforceActions: 'strict'
});

const routing = new RouterStore();
const history = syncHistoryWithStore(createHistory(), routing);

const stores = {
  appSession,
  routing,
  auth: new AuthStore(),
  me: new MeStore()
};

const App = () => (
  <Provider {...stores}>
    <Router history={history}>
      <Boot>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/cart" component={Cart} />

      </Boot>
    </Router>
  </Provider>
);

export default hot(module)(App);
