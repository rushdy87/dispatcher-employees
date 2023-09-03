const express = require('express');

const employeesController = require('../controllers/employees');

const route = express.Router();

route.get('/:id', employeesController.getEmployeeById);

route.post('/newEmployees', employeesController.createEmployee);

module.exports = route;
