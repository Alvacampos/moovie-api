const Router = require('@koa/router');
const genreLib = require('../lib/genres');
const categoriesLib = require('../lib/categories.sample');
const { withResponseMiddleware } = require('../../lib');

const { GenreSerializer } = genreLib;
const { CategorySerializer } = categoriesLib;

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

// const thingsShowSerializer = new GenreSerializer({
//   categorySerializer: new CategorySerializer({
//     genreSerializer: new GenreSerializer(),
//   }),
// });

// router.post(
//   '/',
//   withResponseMiddleware(thingsShowSerializer, (ctx) => genreLib.create(ctx.request.body)),
// );

module.exports = router;
