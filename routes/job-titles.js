const express = require('express');

const jobTitlesController = require('../controllers/job-titles');

const route = express.Router();

// GET /job-titles/:id
route.get('/:id', jobTitlesController.getJobTitleById);

// POST /job-titles/newEmployees
route.post('/newJobTitles', jobTitlesController.createJobTitle);

// GET /job-titles
route.get('/', jobTitlesController.fetchAllJobTitles);

// PATCH /job-titles/:id
route.patch('/:id', jobTitlesController.updateJobTitle);

// DELETE /job-titles/:id
route.delete('/:id', jobTitlesController.removeJobTitle);

module.exports = route;
