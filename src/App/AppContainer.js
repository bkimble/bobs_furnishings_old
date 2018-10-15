import 'theme/semantic.less';

import { Provider } from 'mobx-react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router';
import { configure } from 'mobx';
import React from 'react';
import { hot } from 'react-hot-loader';
import { observer, inject } from 'mobx-react';
import Boot from 'components/Boot';

import Homepage from './Homepage';
import Product from './Product';
import Cart from './Cart';

import AuthStore from 'stores/Auth';
import appSession from 'stores/AppSession';
import MeStore from 'stores/Me';
import CartStore from 'stores/CartStore';

configure({
    enforceActions: 'strict'
});

const routing = new RouterStore();
const history = syncHistoryWithStore(createHistory(), routing);

const stores = {
    appSession,
    routing,
    auth: new AuthStore(),
    me: new MeStore(),
    cart: new CartStore()
};

// Store all mobx stores to local storage for data persistence after refreshing / reloading page
import { AsyncTrunk } from 'mobx-sync';
const trunk = new AsyncTrunk(stores);
trunk.init();

class App extends React.Component {
    render() {
        return(
            <Provider {...stores}>
                <Router history={history}>
                    <Boot>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/product/:sku" component={Product} />
                        <Route exact path="/cart" component={Cart} />
                    </Boot>
                </Router>
            </Provider>
        );
    }
}

export default hot(module)(App);
