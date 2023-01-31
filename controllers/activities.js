const express = require('express');
const { ActivitiesModel } = require('../models/activities.model');

class ActivitiesController {
  constructor(model) {
    this.model = model;
  }

  getActivities(req, res) {
    this.model.getActivities().then(activities => {
      res.send(activities);
    });
  }

  addActivity(req, res) {
    const { name, description } = req.body;
    const activity = { name, description };
    this.model.addActivity(activity).then(newActivity => {
      res.send(newActivity);
    });
  }
}

module.exports = { ActivitiesController };