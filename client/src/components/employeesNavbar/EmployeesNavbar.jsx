import { Link } from 'react-router-dom';
import {
  MdPersonSearch,
  MdPersonAddAlt1,
  MdSaveAlt,
  MdPrint,
} from 'react-icons/md';
import './EmployeesNavbar.css';
const EmployeesNavbar = ({ setShowSearchBox }) => {
  return (
    <>
      <ul className='employees-navbar-container '>
        <li
          className='employees-navbar-item'
          onClick={() => {
            setShowSearchBox((prev) => !prev);
          }}
        >
          <span>بحث</span>
          <MdPersonSearch />
        </li>
        <li className='employees-navbar-item'>
          <Link to='/add-employee'>
            <span>اضافة موظف</span>
            <MdPersonAddAlt1 />
          </Link>
        </li>
        <li className='employees-navbar-item'>
          <span>مايكروسوفت إكسل</span>
          <MdSaveAlt />
        </li>
        <li className='employees-navbar-item'>
          <span>طباعة</span>
          <MdPrint />
        </li>
      </ul>
    </>
  );
};

export default EmployeesNavbar;
