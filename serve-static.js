const Koa = require('koa');
const compress = require('koa-compress');
const koaStatic = require('koa-static');
const historyApiFallback = require('./history-middleware');

const app = new Koa();

const APP_PORT = parseInt(process.env.APP_PORT || 3001, 10);
const HOST = '0.0.0.0';

const redirecthttpsMiddleware = (ctx, next) => {
	if (ctx.secure) return next();
	if (ctx.get('x-forwarded-proto') === 'https') {
		return next();
	}

	if (ctx.protocol === 'http' && ctx.headers.host) {
		return ctx.redirect(`https://${ctx.headers.host}${ctx.url}`);
	}
	return next();
};

if (process.env.REDIRECT_TO_HTTPS) {
	app.use(redirecthttpsMiddleware);
}

app.use(historyApiFallback({index: '/'}));
app.use(compress());
app.use(koaStatic('./dist'));

app.listen(APP_PORT, HOST, err => {
	if (err) throw err;
	console.log(
		`🐬  Prod App server listening at http://${HOST}:${APP_PORT} 🐬\r\n\r\n`
	);
});
