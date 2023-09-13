import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import {
  MdPersonAddAlt1,
  MdPersonSearch,
  MdPrint,
  MdSaveAlt,
} from 'react-icons/md';
import {
  EmployeesContext,
  TableColumnsContext,
  DegreesContext,
  JobTitleContext,
} from '../../contexts';
import './TableNav.scss';

const TableNav = ({ setShowSearchBox }) => {
  const { employees } = useContext(EmployeesContext);
  const { columns } = useContext(TableColumnsContext);
  const { degrees } = useContext(DegreesContext);
  const { jobTitles } = useContext(JobTitleContext);

  const csvData = employees.map((emp) => {
    const selectedColumns = Object.keys(columns)
      .filter((key) => columns[key].value)
      .reduce((acc, key) => {
        acc[columns[key].ar] =
          key === 'degree'
            ? degrees[emp[key] - 1]?.degree_name
            : key === 'job_title'
            ? jobTitles[emp[key] - 1]?.title_name
            : emp[key];
        return acc;
      }, {});
    return selectedColumns;
  });
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
            <CSVLink
              data={csvData}
              filename={`${new Date().toLocaleDateString()}.csv`}
            >
              <span>Export to CVC</span>
              <MdSaveAlt />
            </CSVLink>
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
