import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const EmployeesContext = createContext([]);

export const EmployeesContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3030/employees')
      .then(({ data }) => {
        setEmployees(data);
        setFilteredEmployees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteEmployee = (employeeId) => {
    // Make a copy of the current employees array without the deleted employee
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };
  const addEmployee = (employee) => {
    // Make a copy of the current employees array without the deleted employee
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        filteredEmployees,
        setFilteredEmployees,
        deleteEmployee, // Provide the deleteEmployee function in the context
        addEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
