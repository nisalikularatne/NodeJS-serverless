const config = require('@socar/socar-test/config');

const _config = {
    development: {
        client: config.db.dev.client,
        connection: async function () {
            return {
                host: config.db.dev.host,
                database: config.db.dev.name,
                user: config.db.dev.user,
                password: config.db.dev.password
            };
        },
        pool: {
            min: Number(config.db.dev.min_pool) || 0,
            max: Number(config.db.dev.max_pool) || 1
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    },

    test: {
        client: config.db.test.client,
        connection: async function () {
            return {
                host: config.db.test.host,
                database: config.db.test.name,
                user: config.db.test.user,
                password: config.db.test.password
            };
        },
        pool: {
            min: Number(config.db.test.min_pool) || 0,
            max: Number(config.db.test.max_pool) || 1
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    }
};
module.exports = _config;
