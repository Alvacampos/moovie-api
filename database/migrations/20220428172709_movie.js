exports.up = (knex) =>
  knex.schema.createTable('movie', (table) => {
    table.increments();
    table.string('title');
    table.string('tagline');
    table.string('overview');
    table.date('release_date');
    table.string('poster_url');
    table.string('backdrop_url');
    table.string('imdb_id');
    table.timestamps(false, true);
  });

exports.down = (knex) => knex.schema.dropTable('movie');
