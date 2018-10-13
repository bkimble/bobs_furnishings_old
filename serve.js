const Koa = require('koa');
const Router = require('koa-router');
const config = require('./webpack.config');
const router = new Router();

const webpack = require('koa-webpack'); // eslint-disable-line
const historyApiFallback = require('./history-middleware');

require('app-module-path').addPath(__dirname + "/lib");

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

async function foo(ctx, next) {
  const rows = await knex('products')
  ctx.body = rows
}

router.get('/products', foo)

// router.get('/products', (ctx, next) => {
//   const rows = await knex('products')
//   // console.log("querying")
//   // pool.query("select * from products", (err,rows) => {
//   // console.log("got something")
//   //  if(err) {
//   //      return res.json({'error': true, 'message': 'Error occurred'+err});
//   //  }
//   // console.log("OK DUDE")
//   //  ctx.body = 'rows'
//   // })
//   ctx.body = rows
//
// });
//

app.use(router.routes())
app.use(router.allowedMethods());
app.use(webpackmiddleware);
app.use(historyApiFallback({ index: '/' }));

app.listen(APP_PORT, HOST);

console.log(`Running App on http://${HOST}:${APP_PORT}/`); // eslint-disable-line
