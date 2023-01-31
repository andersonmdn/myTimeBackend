const knex = require('knex');

class ActivitiesModel {
  constructor(db) {
    this.db = db;
  }

  getActivities() {
    return this.db('activities').select('*');
  }

  addActivity(activity) {
    return this.db('activities').insert(activity);
  }
}

module.exports = { ActivitiesModel }