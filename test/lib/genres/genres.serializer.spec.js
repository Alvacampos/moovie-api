const { GenreSerializer } = require('../../../src/lib/genres');

describe('genre/serializer', () => {
  const serviceOutput = {
    name: 't_1',
  };

  describe('by default', () => {
    subject(() => new GenreSerializer().serialize(serviceOutput));

    it('serializes properly', () => {
      const serializerOutput = {
        name: 't_1',
      };

      expect(subject()).toEqual(serializerOutput);
    });
  });
});
