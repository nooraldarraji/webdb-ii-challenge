
exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        table.increments()
        table
            .string('VIN', 128)
            .unique()
            .notNullable()
        table.string('make', 64)
            .notNullable()
        table.string('model', 64)
            .notNullable()
        table.integer('mileage')
            .notNullable()
        table.string('transmission_type', 64)
        table.string('title_status', 64)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExsists('cars')
};
