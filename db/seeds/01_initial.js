/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    { user_id: 1, name: 'Anderson André' },
    { user_id: 2, name: 'Ana Carolina' }
  ]);

  await knex('activies_types').del()
  await knex('activies_types').insert([
    { activities_type_id: 1, description: "Others - 1", has_number: 0, has_item: 0, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 2, description: "Development", has_number: 2, has_item: 2, has_description: 1, has_estimated_time: 1 },
    { activities_type_id: 3, description: "Analyze", has_number: 2, has_item: 0, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 4, description: "Analyze", has_number: 2, has_item: 0, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 5, description: "Others - 2", has_number: 0, has_item: 0, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 6, description: "Others - 3", has_number: 0, has_item: 0, has_description: 0, has_estimated_time: 0 },
    /*{ activities_type_id: 1, has_number: 0, has_item: 0, has_description: 0, has_estimated_time: 0 },
    { activities_type_id: 2, has_number: 0, has_item: 0, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 3, has_number: 0, has_item: 0, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 4, has_number: 0, has_item: 0, has_description: 2, has_estimated_time: 1 },
    { activities_type_id: 5, has_number: 1, has_item: 0, has_description: 0, has_estimated_time: 0 },
    { activities_type_id: 6, has_number: 1, has_item: 0, has_description: 0, has_estimated_time: 1 },
    { activities_type_id: 7, has_number: 1, has_item: 0, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 8, has_number: 1, has_item: 1, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 9, has_number: 1, has_item: 1, has_description: 2, has_estimated_time: 1 },
    { activities_type_id: 10, has_number: 1, has_item: 2, has_description: 0, has_estimated_time: 1 },
    { activities_type_id: 11, has_number: 1, has_item: 2, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 12, has_number: 1, has_item: 2, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 13, has_number: 2, has_item: 0, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 14, has_number: 2, has_item: 1, has_description: 0, has_estimated_time: 0 },
    { activities_type_id: 15, has_number: 2, has_item: 2, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 16, has_number: 2, has_item: 2, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 17, has_number: 2, has_item: 2, has_description: 2, has_estimated_time: 1 },*/
  ]);

  await knex('activies').del()
  await knex('activies').insert([
    { activity_id: 1, description: "", activies_type_id: 1, mytime_id: 0, active: true },
    { activity_id: 2, description: "", activies_type_id: 1, mytime_id: 0, active: true },
    { activity_id: 3, description: "", activies_type_id: 1, mytime_id: 0, active: true },
    { activity_id: 4, description: "", activies_type_id: 1, mytime_id: 0, active: true },
    /*{ activities_type_id: 1, has_number: 0, has_item: 0, has_description: 0, has_estimated_time: 0 },
    { activities_type_id: 2, has_number: 0, has_item: 0, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 3, has_number: 0, has_item: 0, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 4, has_number: 0, has_item: 0, has_description: 2, has_estimated_time: 1 },
    { activities_type_id: 5, has_number: 1, has_item: 0, has_description: 0, has_estimated_time: 0 },
    { activities_type_id: 6, has_number: 1, has_item: 0, has_description: 0, has_estimated_time: 1 },
    { activities_type_id: 7, has_number: 1, has_item: 0, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 8, has_number: 1, has_item: 1, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 9, has_number: 1, has_item: 1, has_description: 2, has_estimated_time: 1 },
    { activities_type_id: 10, has_number: 1, has_item: 2, has_description: 0, has_estimated_time: 1 },
    { activities_type_id: 11, has_number: 1, has_item: 2, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 12, has_number: 1, has_item: 2, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 13, has_number: 2, has_item: 0, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 14, has_number: 2, has_item: 1, has_description: 0, has_estimated_time: 0 },
    { activities_type_id: 15, has_number: 2, has_item: 2, has_description: 1, has_estimated_time: 0 },
    { activities_type_id: 16, has_number: 2, has_item: 2, has_description: 2, has_estimated_time: 0 },
    { activities_type_id: 17, has_number: 2, has_item: 2, has_description: 2, has_estimated_time: 1 },*/
  ]);
};
