import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import {
  MdPersonSearch,
  MdPersonAddAlt1,
  MdSaveAlt,
  MdPrint,
} from 'react-icons/md';
import './EmployeesNavbar.css';
import EmployeesTable from '../employeesTable/EmployeesTable';

const EmployeesNavbar = ({ setShowSearchBox, employees, columns }) => {
  const componentRef = useRef();

  const handelExport = () => {
    // mkConfig merges your options with the defaults
    // and returns WithDefaults<ConfigOptions>
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    // Converts your Array<Object> to a CsvOutput string based on the configs
    const csv = generateCsv(csvConfig)(
      employees.map((emp) => {
        const selectedColumns = Object.keys(columns)
          .filter((key) => columns[key].value)
          .reduce((acc, key) => {
            acc[columns[key].ar] = emp[key];
            return acc;
          }, {});
        return selectedColumns;
      })
    );
    download(csvConfig)(csv);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
        <li className='employees-navbar-item' onClick={handlePrint}>
          <span>طباعة</span>
          <MdPrint />
        </li>
      </ul>
      <div className='printable-table' ref={componentRef}>
        <h2>الاستلام والتجهيز</h2>
        <EmployeesTable
          columns={columns}
          currentData={employees}
          setEmployeeDetails={() => {}}
          printable={true}
        />
      </div>
    </>
  );
};

export default EmployeesNavbar;
