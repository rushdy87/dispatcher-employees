import { useContext, useState } from 'react';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import {
  EmployeesContext,
  TableColumnsContext,
  DegreesContext,
  JobTitleContext,
} from '../../contexts';
import TablePagination from '../table-pagination/TablePagination';
import usePagination from '../../hooks/usePagination';
import { Model, EmployeeForm } from '../';
import './EmployeesTable.scss';

const EmployeesTable = ({ printable }) => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const { employees, editEmployee, deleteEmployee } =
    useContext(EmployeesContext);
  const { columns } = useContext(TableColumnsContext);
  const { degrees } = useContext(DegreesContext);
  const { jobTitles } = useContext(JobTitleContext);

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

  const renderEmployess = (data) => {
    return data.map((employee) => {
      return (
        <tr key={employee.id}>
          {Object.keys(columns).map((key) => {
            if (columns[key].value) {
              return (
                <td key={key} className={`${key}-column`}>
                  {key === 'degree'
                    ? degrees[employee[key] - 1]?.degree_name
                    : key === 'job_title'
                    ? jobTitles[employee[key] - 1]?.title_name
                    : employee[key]}
                </td>
              );
            }
            return null;
          })}
          {!printable && (
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
          )}
        </tr>
      );
    });
  };

  return (
    <>
      {!printable && (
        <div className='table-header'>
          <TablePagination
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            goToPage={goToPage}
            totalPages={totalPages}
          />
          <div className='employees-number'>العدد: {employees.length}</div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            {renderHeader}
            {!printable && (
              <>
                <th className='delete-column'>حذف</th>
                <th className='edit-column'>تعديل</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 &&
            renderEmployess(printable ? employees : currentData)}
        </tbody>
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
            setShowModel={setShowModel}
          />
        </Model>
      )}
    </>
  );
};

export default EmployeesTable;
