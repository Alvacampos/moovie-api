const { Model } = require('objection');

class Movie extends Model {
  static get tableName() {
    return 'movie';
  }

  static get relationMappings() {
    return {};
  }
}

module.exports = { Movie };
