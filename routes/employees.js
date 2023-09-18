const express = require('express');

const employeesController = require('../controllers/employees');

const route = express.Router();

// GET /employees/:id
route.get('/:id', employeesController.getEmployeeById);

// POST /employees/newEmployees
route.post('/newEmployees', employeesController.createEmployee);

// GET /employees
route.get('/', employeesController.fetchAll);

// GET /employees/by-key/
route.get('/by-key/q/', employeesController.fetchByKey);

// GET /employees/:name
route.get('/name/:name', employeesController.getEmployeesByName);

// GET /employees/gender/:gender
route.get('/gender/:gender', employeesController.getEmployeesByGender);

// PATCH /employees/:id
route.patch('/:id', employeesController.updateEmployee);

// DELETE /employees/:id
route.delete('/:id', employeesController.removeEmployee);
module.exports = route;
