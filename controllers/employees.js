const Employees = require('../models/employees');
const Degrees = require('../models/degrees');
const JobTitles = require('../models/job-titles');

// Helper function to handle errors and send responses
function handleResponse(
  res,
  error,
  successData,
  errorMessage = 'Internal server error'
) {
  if (error) {
    console.error(error);
    return res.status(500).json({ error: errorMessage });
  }
  return res.status(200).json(successData);
}

// Get employee by ID
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employees.findByPk(employeeId);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    const [degree, jobTitle] = await Promise.all([
      Degrees.findByPk(employee.specialist_degree),
      JobTitles.findByPk(employee.job_title),
    ]);

    if (degree) {
      employee.specialist_degree = `${degree.degree_name} - ${degree.specialization}`;
    }
    if (jobTitle) {
      employee.job_title = jobTitle.title_name;
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

    return handleResponse(res, null, { message: 'Employee was added' });
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

    const processedEmployees = await Promise.all(
      employees.map(async (employee) => {
        const [degree, jobTitle] = await Promise.all([
          Degrees.findByPk(employee.specialist_degree),
          JobTitles.findByPk(employee.job_title),
        ]);

        if (degree) {
          employee.specialist_degree = `${degree.degree_name} - ${degree.specialization}`;
        }
        if (jobTitle) {
          employee.job_title = jobTitle.title_name;
        }

        return employee;
      })
    );

    return handleResponse(res, null, processedEmployees);
  } catch (error) {
    return handleResponse(res, error);
  }
};
