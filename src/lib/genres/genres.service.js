const { Genre } = require('./genres.model');

const all = ({ pageConfig: { page, pageSize }, ids = null }) =>
  Genre.query()
    .modify((qb) => {
      if (Array.isArray(ids)) {
        qb.findByIds(ids);
      }
    })
    .page(page, pageSize);

module.exports = { all };
