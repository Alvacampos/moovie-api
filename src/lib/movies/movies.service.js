const { Movie } = require('./movies.model');

const all = ({ pageConfig: { page, pageSize }, ids = null }) =>
  Movie.query()
    .modify((qb) => {
      if (Array.isArray(ids)) {
        qb.findByIds(ids);
      }
    })
    .page(page, pageSize);

const searchTitle = ({ title, pageConfig: { page, pageSize }, ids = null }) =>
  Movie.query()
    .modify((qb) => {
      if (Array.isArray(ids)) {
        qb.findByIds(ids);
      }
    })
    .page(page, pageSize)
    .orderBy('title', 'desc')
    .where({ title });

module.exports = { all, searchTitle };
