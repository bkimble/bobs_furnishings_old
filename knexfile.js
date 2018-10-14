// Update with your config settings.

require('app-module-path').addPath(__dirname + "/lib");
config = require('./lib/config')

module.exports = {
  client: 'mysql',
  connection: {
    host     : config.get('db.host'),
    user     : config.get('db.user'),
    password : config.get('db.password'),
    database : config.get('db.name')
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  seeds: {
      directory: 'seeds'
  }
}
