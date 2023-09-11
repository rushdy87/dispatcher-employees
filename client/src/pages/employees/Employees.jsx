import { useState } from 'react';
import { EmployeesNavbar, SearchBox, ShowEmployees } from '../../components';
import './Employees.css';
const Employees = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <div className='employees-page-container'>
      <EmployeesNavbar setShowSearchBox={setShowSearchBox} />
      {showSearchBox && <SearchBox setShowSearchBox={setShowSearchBox} />}
      <ShowEmployees />
    </div>
  );
};

export default Employees;
