import { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeesTable from '../../components/employeesTable/EmployeesTable';
import AddEmployeeForm from '../../components/addEmployeeForm/AddEmployeeForm';
import './Employees.css';
import FindEmployee from '../../components/findEmployee/FindEmployee';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [addEmployees, setAddEmployees] = useState(false);

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
    <div className='employees-container'>
      {addEmployees ? (
        <AddEmployeeForm setAddEmployees={setAddEmployees} />
      ) : (
        <>
          <FindEmployee
            employees={employees}
            setFilteredEmployees={setFilteredEmployees}
          />
          <div className='employees-table'>
            <button onClick={() => setAddEmployees(true)}>
              اضفافة موظف جديد
            </button>
            <EmployeesTable employees={filteredEmployees} />
          </div>
        </>
      )}
    </div>
  );
};

export default Employees;
