import { Link } from 'react-router-dom';
import {
  MdPersonAddAlt1,
  MdPersonSearch,
  MdPrint,
  MdSaveAlt,
} from 'react-icons/md';
import './TableNav.scss';

const TableNav = ({ setShowSearchBox }) => {
  return (
    <>
      <div className='table-nav'>
        <ul>
          <li
            className='table-nav-item'
            onClick={() => setShowSearchBox((prev) => !prev)}
          >
            <span>بحث</span>
            <MdPersonSearch />
          </li>
          <li className='table-nav-item'>
            <Link to='/add-employee'>
              <span>اضافة موظف</span>
              <MdPersonAddAlt1 />
            </Link>
          </li>
          <li className='table-nav-item'>
            <span>Export to CVC</span>
            <MdSaveAlt />
          </li>
          <li className='table-nav-item'>
            <span>طباعة</span>
            <MdPrint />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TableNav;
