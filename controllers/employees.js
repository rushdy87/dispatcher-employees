const { Employee, employees } = require('../models/employee');

exports.getEmployeeById = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const employee = employees.find((e) => e.id === id);
  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: 'user not found' });
  }
};

exports.createEmployee = (req, res, next) => {
  const { name, status, joining_date, phone_number, gender } = req.body;

  const employee = new Employee(
    name,
    status,
    joining_date,
    phone_number,
    gender
  );

  employee.save();

  res.status(200).json(Employee.fetchAll());
};
