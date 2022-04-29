const { Model } = require('objection');

class Genre extends Model {
  static get tableName() {
    return 'genre';
  }
}

module.exports = { Genre };
