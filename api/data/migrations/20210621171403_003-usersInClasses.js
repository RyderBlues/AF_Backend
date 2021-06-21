
exports.up = function(knex) {
  return knex.schema
    .createTable('usersInClasses', table => {
        table.increments('userClassId')
        table.integer('userId')
            .unsigned()
            .notNullable()
            .references('userId')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        table.integer('classId')
            .unsigned()
            .notNullable()
            .references('classId')
            .inTable('classes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('usersInClasses');
};
