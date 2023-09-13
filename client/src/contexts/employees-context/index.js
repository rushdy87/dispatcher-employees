import React, { createContext, useState, useEffect } from 'react';
import {
  getAllEmployees,
  getEmployeeById,
  getEmployeesByName,
  addEmployee as ae,
  updateEmployee,
  deleteEmployee as de,
  getEmployeesByGender,
} from '../../utils/api';

export const EmployeesContext = createContext({
  employees: [],
  findEmployeeById: () => {},
  findEmployeesByName: () => {},
  fetchAllEmployees: () => {},
  error: null, // Add error state
  isLoading: true, // Add loading state
});

export const EmployeesContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null); // Initialize error state
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesList = await getAllEmployees();
        setEmployees(employeesList);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const findEmployeeById = async (id) => {
    try {
      const employee = await getEmployeeById(id);
      if (employee) {
        setEmployees([employee]);
      } else {
        setError('Employee not found');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  const findEmployeesByName = async (name) => {
    try {
      const employees = await getEmployeesByName(name);
      if (employees.length > 0) {
        setEmployees(employees);
      } else {
        setError('Employee not found');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  const findEmployeesByGender = async (genderName) => {
    try {
      const employees = await getEmployeesByGender(genderName);
      if (employees.length > 0) {
        setEmployees(employees);
      } else {
        setError('Employee not found');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  const fetchAllEmployees = async () => {
    try {
      const employeesList = await getAllEmployees();
      setEmployees(employeesList);
    } catch (error) {
      setError('An error occurred');
    }
  };

  const addEmployee = async (employee) => {
    try {
      const response = await ae(employee);
      const newEmployee = response.employee;
      if (newEmployee) {
        fetchAllEmployees();
        return 'تم اضافة الموظف بنجاح';
      } else {
        setError('Employee not found');
        return 'حدث خلل اثناء الاضافة.. يرجى المحا،ولة في وقت لاحق';
      }
    } catch (error) {
      setError('An error occurred');
      return 'حدث خلل اثناء الاضافة.. يرجى المحا،ولة في وقت لاحق';
    }
  };
  const editEmployee = async (employee) => {
    try {
      const response = await updateEmployee(employee);
      const newEmployee = response.employee;
      if (newEmployee) {
        fetchAllEmployees();
      } else {
        setError('Employee not found');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await de(id);
      fetchAllEmployees();
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        findEmployeeById,
        findEmployeesByName,
        findEmployeesByGender,
        fetchAllEmployees,
        addEmployee,
        editEmployee,
        deleteEmployee,
        error,
        isLoading,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
