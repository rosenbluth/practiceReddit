exports.up = function(knex, Promise) {

    return knex.schema.createTableIfNotExists('users', function(table) {
        table.increments();
        table.string('name');
        table.specificType('hashed_password', 'char(60)');
        table.timestamps();

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
