exports.up = function (knex) {
    return knex.schema.createTable('car_list', function (table) {
        table.increments('id').primary();
        table.string('car', 65).nullable();
        table.timestamp('created_at');
        table.timestamp('updated_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('car_list');
};
