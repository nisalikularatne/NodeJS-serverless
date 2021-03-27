exports.up = function (knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE');
        table.string('model', 65);
        table.string('manufacturer', 100);
        table.string('location', 255);
        table.boolean('is_available').defaultTo(false);
        table.string('car_registration_plate', 60);
        table.integer('car_year', 4);
        table.boolean('is_manual').defaultTo(false);
        table.string('creator_subject', 200);
        table.timestamp('created_at');
        table.timestamp('updated_at');
        table.timestamp('deleted_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cars');
};
