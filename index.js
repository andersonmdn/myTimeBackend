const express = require('express');
const knex = require('knex');
const ActivitiesController = require('./controllers/activities').ActivitiesController;
const ActivitiesModel = require('./models/activities.model').ActivitiesModel;
const cors = require('cors')

const app = express();
app.use(cors());
const db = knex(require('./knexfile').development);
const model = new ActivitiesModel(db);
const controller = new ActivitiesController(model);

app.get('/activities', (req, res) => {
    controller.getActivities(req, res);
});

app.post('/activities', (req, res) => {
    controller.addActivity(req, res);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
