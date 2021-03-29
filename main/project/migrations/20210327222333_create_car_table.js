exports.up = function (knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments('id').primary();
        table.string('model', 65);
        table.string('manufacturer', 100);
        table.integer('day_price').notNullable();
        table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE');
        table.string('location', 255);
        table.boolean('is_available').defaultTo(false);
        table.string('car_registration_plate', 60).unique();
        table.integer('car_year', 4);
        table.boolean('is_manual').defaultTo(false);
        table.timestamp('created_at');
        table.timestamp('updated_at');
        table.timestamp('deleted_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cars');
};
