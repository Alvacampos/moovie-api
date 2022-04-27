const { Serializer } = require('../../../lib');

class GenreSerializer extends Serializer {
  constructor() {
    super({ collectionName: 'Genre' });

    this.baseFields = ['name'];

    this.meta = {};
  }
}

module.exports = GenreSerializer;
