import { createContext, useState, useEffect } from 'react';
import { getAllEmployees } from '../../utils/api';

export const EmployeesContext = createContext({ employees: [] });

export const EmployeesContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeesList) => {
      setEmployees(employeesList);
    });
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
