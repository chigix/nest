require('ts-node/register');

// Update with your config settings.

module.exports = {
    "client": "mysql2",
    "connection": {
        "host": "localhost",
        "database": "db_test",
        "user": "root",
        "password": "xxxxxx"
    },
    "migrations": {
        "directory": "./knex/migrations/"
    }
};
