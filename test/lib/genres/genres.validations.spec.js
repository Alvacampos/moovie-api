const { pick } = require('../../../src/utils/pick');

const genreValidations = require('../../../src/lib/genres/genres.validations');
const { genre1 } = require('../../fixtures/genre.sample');

describe('things/validations', () => {
  describe('create', () => {
    const validThing = pick(genre1, ['name']);

    subject(() => genreValidations.create.validate(get('params')));

    const itIsInvalid = () => {
      it('is invalid', () => {
        expect(subject().error).toBeTruthy();
      });
    };

    const itIsValid = () => {
      it('is valid', () => {
        expect(subject().error).toBeUndefined();
      });
    };

    describe('when the thing is correct', () => {
      def('params', () => validThing);

      itIsValid();
    });

    describe('name', () => {
      describe('when it is not present', () => {
        def('params', () => ({ ...validThing, name: undefined }));

        itIsInvalid();
      });

      describe('when it is present', () => {
        describe('when it is not a string', () => {
          def('params', () => ({ ...validThing, name: 123 }));

          itIsInvalid();
        });

        describe('when it is a string', () => {
          describe('when its length is less than 3', () => {
            def('params', () => ({ ...validThing, name: 'aa' }));

            itIsInvalid();
          });

          describe('when its length is grater than or equal to 3', () => {
            def('params', () => ({ ...validThing, name: 'aaa' }));

            itIsValid();
          });
        });
      });
    });
  });
});
