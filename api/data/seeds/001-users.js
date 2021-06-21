exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'student', 
          password: 'password', 
          role:"Client"
        },
        {
          username: 'instructor',
         password: 'password',
         role:"Instructor"
        },
        {
          username: 'billy', 
          password: 'password', 
          role:"Client"
        }
      ]);
    });
};
