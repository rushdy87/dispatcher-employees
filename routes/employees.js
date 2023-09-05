const express = require('express');

const employeesController = require('../controllers/employees');

const route = express.Router();

// GET /employees/:id
route.get('/:id', employeesController.getEmployeeById);

// POST /employees/newEmployees
route.post('/newEmployees', employeesController.createEmployee);

// GET /employees
route.get('/', employeesController.fetchAll);

// GET /employees/:name
route.get('/name/:name', employeesController.getEmployeesByName);

// PATCH /employees/:id
route.patch('/:id', employeesController.updateEmployee);

// DELETE /employees/:id
route.delete('/:id', employeesController.removeEmployee);
module.exports = route;
