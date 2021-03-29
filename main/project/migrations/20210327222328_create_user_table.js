exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name').index().notNullable();
        table.string('license_number', 65).unique().notNullable();
        table.string('location', 255).nullable();
        table.timestamp('created_at');
        table.timestamp('updated_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
