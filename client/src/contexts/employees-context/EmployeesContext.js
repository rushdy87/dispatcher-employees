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
  return (
    <EmployeesContext.Provider
      value={{ employees, filteredEmployees, setFilteredEmployees }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
