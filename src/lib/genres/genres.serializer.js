const { Serializer } = require('../../../lib');

class GenreSerializer extends Serializer {
  constructor() {
    super({ collectionName: 'genre' });

    this.baseFields = ['name'];

    this.meta = {};
  }
}

module.exports = GenreSerializer;
