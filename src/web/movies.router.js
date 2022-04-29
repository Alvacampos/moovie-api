const Router = require('@koa/router');
const moviesLib = require('../lib/movies');
const { withResponseMiddleware } = require('../../lib');

const { MovieSerializer } = moviesLib;

const router = new Router();

const movieIndexSerializer = new MovieSerializer();

router.get(
  '/',
  withResponseMiddleware(
    movieIndexSerializer,
    (ctx) => moviesLib.all({ pageConfig: ctx.state.pageConfig, ids: ctx.query.ids }),
    {
      paged: true,
      defaultPageSize: 20,
    },
  ),
);

router.get(
  '/title',
  withResponseMiddleware(
    movieIndexSerializer,
    (ctx) =>
      moviesLib.searchTitle({
        title: ctx.request.body.title,
        pageConfig: ctx.state.pageConfig,
        ids: ctx.query.ids,
      }),
    {
      paged: true,
      defaultPageSize: 20,
    },
  ),
);

module.exports = router;
