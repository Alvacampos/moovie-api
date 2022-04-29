exports.seed = async (knex) => {
  await knex('genre').del();
  await knex('genre').insert([{ name: 'genre1' }, { name: 'genre2' }, { name: 'genre3' }]);
};
