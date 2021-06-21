
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          name: 'Pilates',
          type: 'Doin the big stretch n stuff',
          startTime: '3PM',
          duration: '30 minutes',
          intensityLevel: 'impossible',
          location: 'TBD',
          userId: 2
        },
        {
          name: 'Crossfit',
          type: 'Throwin weights or somethin',
          startTime: '1PM',
          duration: '5 minutes',
          intensityLevel: 'easy',
          location: 'Portland, Oregon',
          userId: 2
        },
        {
          name: 'Yoga With Friends',
          type: 'Yoga',
          startTime: '5AM',
          duration: '2 Hours',
          intensityLevel: 'medium',
          location: 'YogaBarn',
          userId: 2
        }
      ]);
    });
};
