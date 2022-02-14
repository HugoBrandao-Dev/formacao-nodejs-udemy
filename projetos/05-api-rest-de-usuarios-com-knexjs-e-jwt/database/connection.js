var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '#Oguh591022#',
      database : 'api_users'
    }
  });

module.exports = knex
