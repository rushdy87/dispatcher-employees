import {
  MdPersonSearch,
  MdPersonAddAlt1,
  MdSaveAlt,
  MdPrint,
} from 'react-icons/md';
import './EmployeesNavbar.css';
const EmployeesNavbar = () => {
  return (
    <>
      <ul className='employees-navbar-container '>
        <li className='employees-navbar-item'>
          <button>بحث</button>
          <MdPersonSearch />
        </li>
        <li className='employees-navbar-item'>
          <button>اضافة موظف</button>
          <MdPersonAddAlt1 />
        </li>
        <li className='employees-navbar-item'>
          <button>مايكروسوفت إكسل</button>
          <MdSaveAlt />
        </li>
        <li className='employees-navbar-item'>
          <button>طباعة</button>
          <MdPrint />
        </li>
      </ul>
    </>
  );
};

export default EmployeesNavbar;
