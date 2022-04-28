const Router = require('@koa/router');
const genreLib = require('../lib/genres');
const { withResponseMiddleware } = require('../../lib');

const { GenreSerializer } = genreLib;

const router = new Router();

const genreIndexSerializer = new GenreSerializer();

router.get(
  '/',
  withResponseMiddleware(
    genreIndexSerializer,
    (ctx) => genreLib.all({ pageConfig: ctx.state.pageConfig, ids: ctx.query.ids }),
    {
      paged: true,
      defaultPageSize: 20,
    },
  ),
);

module.exports = router;
