import React, { createContext, useState, useEffect } from 'react';
import {
  getAllEmployees,
  getEmployeeById,
  getEmployeesByName,
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

  const fetchAllEmployees = async () => {
    try {
      const employeesList = await getAllEmployees();
      setEmployees(employeesList);
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
        fetchAllEmployees,
        error,
        isLoading,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
