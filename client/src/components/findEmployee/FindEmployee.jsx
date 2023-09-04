import { useState } from 'react';
import './FindEmployee.css';

const FindEmployee = ({ employees, setFilteredEmployees }) => {
  const [employee, setEmployee] = useState({ id: '', name: '' });

  const handleChange = (event) => {
    setEmployee((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredEmployees = employees.filter((e) => {
      // Check if employee.id matches the input ID if provided
      if (employee.id && +employee.id !== e.id) {
        return false;
      }

      // Check if employee.name includes the input name (case-insensitive)
      if (
        employee.name &&
        !e.name.toLowerCase().includes(employee.name.toLowerCase())
      ) {
        return false;
      }

      // If none of the above conditions matched, include the employee in the results
      return true;
    });

    setFilteredEmployees(filteredEmployees);
    setEmployee({ id: '', name: '' });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor='id'>رقم الحاسبة</label>
          <input
            type='number'
            name='id'
            id='id'
            value={employee.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='name'>الاسم</label>
          <input
            type='text'
            name='name'
            id='name'
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>بحث</button>
      </form>
    </div>
  );
};

export default FindEmployee;
