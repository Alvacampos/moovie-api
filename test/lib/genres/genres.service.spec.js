const genreService = require('../../../src/lib/genres/genres.service');
const { knexConnection } = require('../../knexTestHelper');

describe('things/service', () => {
  describe('all', () => {
    def('thingIds', () => undefined);

    subject(() => genreService.all({ pageConfig: get('pageConfig'), ids: get('thingIds') }));

    beforeEach(async () => {
      const thingsToInsert = [
        { name: 'a Name 1' },
        { name: 'a Name 2' },
        { name: 'a Name 3' },
        { name: 'a Name 4' },
        { name: 'a Name 5' },
      ];
      await knexConnection('genre').insert(thingsToInsert);
    });

    describe('when not passed a page config', () => {
      def('pageConfig', () => undefined);

      it('throws TypeError', () => {
        expect(() => subject()).toThrow("Cannot read properties of undefined (reading 'page')");
      });
    });

    describe('when passed a page config', () => {
      describe('when getting all the things', () => {
        def('pageConfig', () => ({ page: 0, pageSize: 10 }));

        it('returns the list of things (ignoring inactive) and the total things count', async () => {
          const things = await subject();
          expect(things).toMatchObject({
            results: [
              { name: 'a Name 1' },
              { name: 'a Name 2' },
              { name: 'a Name 3' },
              { name: 'a Name 4' },
              { name: 'a Name 5' },
            ],
            total: 5,
          });
        });
      });
    });
  });
});
