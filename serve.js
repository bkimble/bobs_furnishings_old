const Koa = require('koa');
const Router = require('koa-router');
const config = require('./webpack.config');
const router = new Router();

const webpack = require('koa-webpack'); // eslint-disable-line
const historyApiFallback = require('./history-middleware');

require('app-module-path').addPath(__dirname);

const knex = require('knex')(require('./knexfile'))

const app = new Koa();

const HOST = '0.0.0.0';
const APP_PORT = parseInt(process.env.APP_PORT || 3001, 10);
const ADMIN_PORT = parseInt(process.env.API_PORT || 3002, 10);

const webpackmiddleware = webpack({
  config: {
    ...config,
    mode: 'development'
  }
});

const handlers = require('handlers')

router.get('/api/products', handlers.getProducts)
router.get('/api/product/:sku', handlers.getProduct)
router.get('/api/variations/:product_id', handlers.getVariations)

app.use(router.routes())
app.use(router.allowedMethods());
app.use(historyApiFallback({ index: '/' }));
app.use(webpackmiddleware);

app.listen(APP_PORT, HOST);

console.log(`Running App on http://${HOST}:${APP_PORT}/`); // eslint-disable-line
