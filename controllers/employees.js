const { Op } = require('sequelize');

const Employees = require('../models/employees');

const { handleResponse } = require('../util/helper-functions');

// Get employee by ID
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employees.findByPk(employeeId);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    return handleResponse(res, null, employee);
  } catch (error) {
    return handleResponse(res, error);
  }
};

// Create employee
exports.createEmployee = async (req, res, next) => {
  try {
    const { employeeData } = req.body;
    const employee = await Employees.create(employeeData);

    if (!employee) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    return handleResponse(res, null, {
      message: 'Employee was added',
      employee,
    });
  } catch (error) {
    return handleResponse(res, error);
  }
};

// Fetch all employees
exports.fetchAll = async (req, res, next) => {
  try {
    const employees = await Employees.findAll();

    if (employees.length === 0) {
      return res.status(404).json({ error: 'No Employee found' });
    }

    return handleResponse(res, null, employees);
  } catch (error) {
    return handleResponse(res, error);
  }
};

// Get employees by Name
exports.getEmployeesByName = async (req, res, next) => {
  try {
    const employeeName = req.params.name;
    const employees = await Employees.findAll({
      where: { name: { [Op.like]: `%${employeeName}%` } },
    });

    if (employees.length === 0) {
      return res.status(404).json({ error: 'No Employee found' });
    }

    return handleResponse(res, null, employees);
  } catch (error) {
    return handleResponse(res, error);
  }
};

// Get employees be gender
exports.getEmployeesByName = async (req, res, next) => {
  try {
    const { gender } = req.params;

    const employees = await Employees.findAll({
      where: { gender },
    });

    if (employees.length === 0) {
      return res.status(404).json({ error: 'No Employee found' });
    }

    return handleResponse(res, null, employees);
  } catch (error) {
    return handleResponse(res, error);
  }
};

// Update employee
exports.updateEmployee = async (req, res, next) => {
  try {
    const employeeId = req.params.id;
    const { employeeData } = req.body;

    // Try to find the employee by ID
    let employee = await Employees.findByPk(employeeId);

    if (!employee) {
      // If the employee doesn't exist, create a new one with the provided data
      employee = await Employees.create(employeeData);
    } else {
      // If the employee exists, update their data
      await Employees.update(employeeData, {
        where: {
          id: employee.id,
        },
      });
      // Fetch the updated employee data after the update
      employee = await Employees.findByPk(employeeId);
    }

    // Check if the update or creation was successful
    if (!employee) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    return handleResponse(res, null, {
      message: 'Employee was updated',
      employee,
    });
  } catch (error) {
    return handleResponse(res, error);
  }
};

// Delete an employee
exports.removeEmployee = async (req, res, next) => {
  try {
    const employeeId = req.params.id;
    let employee = await Employees.findByPk(employeeId);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    // Try to delete the employee by their ID
    const deletionResult = await Employees.destroy({
      where: { id: employeeId },
    });

    if (deletionResult === 1) {
      // The deletion was successful (1 row affected)
      return handleResponse(res, null, { message: 'Employee was deleted' });
    } else {
      // The deletion did not affect any rows (employee not found)
      return res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    return handleResponse(res, error);
  }
};
