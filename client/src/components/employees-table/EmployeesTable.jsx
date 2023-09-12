import { useContext } from 'react';
import { EmployeesContext } from '../../contexts/employees-context';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import './EmployeesTable.scss';
import TablePagination from '../table-pagination/TablePagination';
import usePagination from '../../hooks/usePagination';
import { TableColumnsContext } from '../../contexts/Table-columns-context';

const EmployeesTable = () => {
  const { employees } = useContext(EmployeesContext);
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
              <MdOutlineEditNote onClick={() => {}} />
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
    </>
  );
};

export default EmployeesTable;
