import { Link } from 'react-router-dom';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import {
  MdPersonSearch,
  MdPersonAddAlt1,
  MdSaveAlt,
  MdPrint,
} from 'react-icons/md';
import './EmployeesNavbar.css';

const EmployeesNavbar = ({ setShowSearchBox, employees }) => {
  const handelExport = () => {
    // mkConfig merges your options with the defaults
    // and returns WithDefaults<ConfigOptions>
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    // Converts your Array<Object> to a CsvOutput string based on the configs
    const csv = generateCsv(csvConfig)(employees);
    download(csvConfig)(csv);
  };

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
        <li className='employees-navbar-item' onClick={handelExport}>
          <span>Export to CVC</span>
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
