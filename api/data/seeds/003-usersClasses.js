
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usersInClasses').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersInClasses').insert([
        {userId: 1, classId: 1},
        {userId: 1, classId: 2},
        {userId: 1, classId: 3},
        {userId: 3, classId: 1},
        {userId: 3, classId: 3},
      ]);
    });
};
