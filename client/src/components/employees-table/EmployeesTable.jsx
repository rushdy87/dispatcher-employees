import { useContext, useState } from 'react';
import { EmployeesContext, TableColumnsContext } from '../../contexts';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import './EmployeesTable.scss';
import TablePagination from '../table-pagination/TablePagination';
import usePagination from '../../hooks/usePagination';
import { Model, EmployeeForm } from '../';

const EmployeesTable = () => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const { employees, editEmployee } = useContext(EmployeesContext);
  const { columns } = useContext(TableColumnsContext);

  const { currentData, currentPage, nextPage, prevPage, goToPage, totalPages } =
    usePagination(employees, 15);

  const renderHeader = Object.keys(columns).map((key) => {
    if (columns[key].value) {
      return (
        <th key={key} className={`${key}-column`}>
          {columns[key].ar}
        </th>
      );
    }
    return null;
  });

  const renderEmployess = currentData.map((employee) => {
    return (
      <tr key={employee.id}>
        {Object.keys(columns).map((key) => {
          if (columns[key].value) {
            return (
              <td key={key} className={`${key}-column`}>
                {employee[key]}
              </td>
            );
          }
          return null;
        })}
        {
          <>
            <td>
              <MdPersonRemoveAlt1 onClick={() => {}} />
            </td>
            <td>
              <MdOutlineEditNote onClick={() => setEmployeeDetails(employee)} />
            </td>
          </>
        }
      </tr>
    );
  });

  return (
    <>
      <TablePagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
        totalPages={totalPages}
      />
      <table>
        <thead>
          <tr>
            {renderHeader}
            {
              <>
                <th>حذف</th>
                <th>تعديل</th>
              </>
            }
          </tr>
        </thead>
        <tbody>{currentData.length > 0 && renderEmployess}</tbody>
      </table>

      {employeeDetails && (
        <Model>
          <EmployeeForm
            employeeDetails={employeeDetails}
            submitHandler={async (employee) => {
              try {
                await editEmployee(employee);
                setEmployeeDetails(null);
              } catch (error) {
                console.log(error);
              }
            }}
            setEmployeeDetails={setEmployeeDetails}
          />
        </Model>
      )}
    </>
  );
};

export default EmployeesTable;
