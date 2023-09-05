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
  const [columns, setColumns] = useState({
    id: { value: true, ar: 'رقم الحاسبة' },
    name: { value: true, ar: 'الاسم' },
    job_title: { value: true, ar: 'العنوان الوظيفي' },
    degree: { value: false, ar: 'التحصيل الدراسي' },
    status: { value: true, ar: 'الحالة الوظيفية' },
    workday: { value: false, ar: 'نوع الدوام' },
    joining_date: { value: false, ar: 'تاريخ المباشرة' },
    phone_number: { value: false, ar: 'رقم الهاتف' },
    birthdate: { value: false, ar: 'تاريخ الميلاد' },
    address: { value: false, ar: 'العنوان' },
  });
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
            columns={columns}
            setColumns={setColumns}
          />
          <div className='employees-table'>
            <button onClick={() => setAddEmployees(true)}>
              اضفافة موظف جديد
            </button>
            <EmployeesTable columns={columns} employees={filteredEmployees} />
          </div>
        </>
      )}
    </div>
  );
};

export default Employees;
