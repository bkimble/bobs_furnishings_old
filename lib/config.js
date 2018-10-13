'use strict';

const convict = require('convict');

const config = convict({
    db: {
        host: {
            default: 'localhost',
            doc: 'Database Host',
            env: 'DATABASE_HOST',
            format: String
        },
        user: {
            default: 'root',
            env: 'DATABASE_USER',
          doc: 'The user of the database',
            format: String
        },
        password: {
            default: '',
            env: 'DATABASE_PASSWORD',
            doc: 'The password for the database user',
            format: String
        },
        name: {
            default: 'bobs_furnishings_dev',
            doc: 'The name of the database to select',
            env: 'DATABASE_NAME',
            format: String
        }
    },
  }
);
  
// validate
config.validate();

module.exports = config;