const { Model } = require('objection');

class Genre extends Model {
  static get tableName() {
    return 'genre';
  }

  // static get relationMappings() {
  //   const { Category } = require('../categories.sample/categories.model'); //eslint-disable-line

  //   return {
  //     category: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: Category,
  //       join: {
  //         from: 'Gener.name',
  //         to: 'Gener.nam',
  //       },
  //     },
  //   };
  // }
}

module.exports = { Genre };
