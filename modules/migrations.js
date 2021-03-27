const knex = require('@socar/socar-test/db/knex');

exports.handler = async () => {
    await knex.migrate.latest();

    await knex.seed.run();

    return 'Migrations and seeds triggered successfully';
};
