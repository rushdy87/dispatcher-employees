const express = require('express');

const degreesController = require('../controllers/degrees');

const route = express.Router();

// GET /ddegrees/:id
route.get('/:id', degreesController.getDegreeById);

// POST /degrees/newEmployees
route.post('/newDegree', degreesController.createDegree);

// GET /degrees
route.get('/', degreesController.fetchAllDegrees);

// PATCH /degrees/:id
route.patch('/:id', degreesController.updateDegree);

// DELETE /degrees/:id
route.delete('/:id', degreesController.removeDegree);
module.exports = route;
