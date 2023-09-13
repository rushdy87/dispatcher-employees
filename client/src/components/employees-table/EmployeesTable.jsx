import { useContext, useState } from 'react';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import { EmployeesContext, TableColumnsContext } from '../../contexts';
import TablePagination from '../table-pagination/TablePagination';
import usePagination from '../../hooks/usePagination';
import { Model, EmployeeForm } from '../';
import './EmployeesTable.scss';

const EmployeesTable = () => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const { employees, editEmployee, deleteEmployee } =
    useContext(EmployeesContext);
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

  const handleDeleteEmployee = (employee) => {
    const confirmDelete = window.confirm(
      'سيتم حذف الموظف من قاعدة البيانات الرئيسية، حيث لا يمكن استرجاعه مرة أخرى. هل أنت متأكد من الحذف؟'
    );

    if (confirmDelete) {
      deleteEmployee(employee.id).catch((error) => {
        console.error('Error deleting employee:', error);
        alert('حدث خطأ أثناء الحذف. الرجاء المحاولة مرة أخرى.');
      });
    }
  };

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
            <td className='delete-column'>
              <MdPersonRemoveAlt1
                onClick={() => handleDeleteEmployee(employee)}
              />
            </td>
            <td className='edit-column'>
              <MdOutlineEditNote
                onClick={() => {
                  setEmployeeDetails(employee);
                  setShowModel(true);
                }}
              />
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
                <th className='delete-column'>حذف</th>
                <th className='edit-column'>تعديل</th>
              </>
            }
          </tr>
        </thead>
        <tbody>{currentData.length > 0 && renderEmployess}</tbody>
      </table>

      {showModel && (
        <Model setShowModel={setShowModel}>
          <EmployeeForm
            employeeDetails={employeeDetails}
            submitHandler={async (employee) => {
              try {
                await editEmployee(employee);
                setEmployeeDetails(null);
                setShowModel(false);
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
