import { useContext, useState } from 'react';
import { EditModel, EmployeesTable, Pagination } from '..';
import usePagination from '../../hooks/usePagination';
import './ShowEmployees.css';
import { EmployeesContext, TableColumnsContext } from '../../contexts';

const ShowEmployees = () => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const { filteredEmployees } = useContext(EmployeesContext);
  const { columns } = useContext(TableColumnsContext);

  const { currentPage, currentData, nextPage, prevPage, goToPage, totalPages } =
    usePagination(filteredEmployees, 10);

  return (
    <div className='employees-table-container'>
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
        totalPages={totalPages}
      />
      <EmployeesTable
        columns={columns}
        currentData={currentData}
        setEmployeeDetails={setEmployeeDetails}
        printable={false}
      />
      {employeeDetails && (
        <EditModel
          employeeDetails={employeeDetails}
          setEmployeeDetails={setEmployeeDetails}
        />
      )}
    </div>
  );
};

export default ShowEmployees;
