

// // knex connector
// const connectedKnex = knex({
//     client: "sqlite3",
//     connection: {
//         filename: "accounts.db"
//     }
// })

// knex connector posgres
const connectedKnexpg = require('knex')({
    client: 'pg',
    version: '12',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'ADMIN',
      database : 'postgres'
    }
  });

module.exports = connectedKnexpg;