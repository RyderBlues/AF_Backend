exports.up = async function (knex) {
    await knex.schema.dropTableIfExists('users');

    await knex.schema
      .createTable('users', tbl => {
        tbl.increments('userId')
        tbl.string('username', 200).notNullable().unique()
        tbl.string('password', 200).notNullable()
        tbl.string('role', 200).notNullable()
        tbl.boolean('skip').defaultTo(0)
      });
  };
  
  exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('users');

    await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('user_username', 200).notNullable()
      users.string('user_password', 200).notNullable()
      users.string('user_email', 320).notNullable()
      users.timestamps(false, true)
    })
    
  };
