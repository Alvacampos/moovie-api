const Router = require('@koa/router');

const requestLoggerMiddleware = require('../middlewares/requestLoggerMiddleware');
const thingsRouter = require('./things.router.sample'); // bin/cleanup mark

const genreRouter = require('./genre.router');

const moviesRouter = require('./movies.router');

const apiRouter = new Router({ prefix: '/api' });

apiRouter.get('/healthcheck', (ctx) => {
  ctx.body = { status: 'ok' };
});

apiRouter.use(requestLoggerMiddleware());

apiRouter.use('/genre', genreRouter.routes());

apiRouter.use('/movies', moviesRouter.routes());

apiRouter.use('/things', thingsRouter.routes()); // bin/cleanup mark

module.exports = apiRouter;
