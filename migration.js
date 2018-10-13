var mysql = require('mysql');
var migration = require('mysql-migrations');
require('app-module-path').addPath(__dirname + "/lib");
config = require('config')

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : config.get('db.host'),
  user     : config.get('db.user'),
  password : config.get('db.password'),
  database : config.get('db.name')
});

migration.init(connection, __dirname + '/migrations');