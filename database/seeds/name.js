exports.seed = async (knex) => {
  await knex('Genre').del();
  await knex('Genre').insert([{ name: 'genre1' }, { name: 'genre2' }, { name: 'genre3' }]);
};
