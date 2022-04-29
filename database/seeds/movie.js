exports.seed = async (knex) => {
  await knex('movie').del();
  await knex('movie').insert([
    {
      title: 'test1',
      tagline: 'test1',
      overview: 'test1',
      release_date: '2021-02-11',
      poster_url: 'test1',
      backdrop_url: '<tes></tes>t1',
      imdb_id: 'test1',
    },
    {
      title: 'test2',
      tagline: 'test2',
      overview: 'test2',
      release_date: '1990-02-11',
      poster_url: 'test2',
      backdrop_url: '<tes></tes>t2',
      imdb_id: 'test2',
    },
    {
      title: 'test3',
      tagline: 'test3',
      overview: 'test3',
      release_date: '2001-02-11',
      poster_url: 'test3',
      backdrop_url: '<tes></tes>t3',
      imdb_id: 'test3',
    },
  ]);
};
