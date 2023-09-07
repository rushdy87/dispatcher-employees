import { useState } from 'react';
import axios from 'axios';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import { EditModel, Pagination } from '../';
import usePagination from '../../hooks/usePagination';
import './EmployeesTable.css';

const EmployeesTable = ({ columns, employees }) => {
  const [employeeDetails, setEmployeeDetails] = useState(null);

  const { currentPage, currentData, nextPage, prevPage, goToPage, totalPages } =
    usePagination(employees, 2);

  const handleDeleteEmployee = (employee) => {
    const confirmDelete = window.confirm(
      'سيتم حذف الموظف من قاعدة البيانات الرئيسية، حيث لا يمكن استرجاعه مرة أخرى. هل أنت متأكد من الحذف؟'
    );

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3030/employees/${employee.id}`)
        .then(({ data }) => {
          console.log(data.message); // Log a success message
          // Optionally, you can remove the deleted employee from the UI if needed.
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
          alert('حدث خطأ أثناء الحذف. الرجاء المحاولة مرة أخرى.'); // Display an error message
        });
    }
  };

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
        <td>
          <MdPersonRemoveAlt1 onClick={() => handleDeleteEmployee(employee)} />
        </td>
        <td>
          <MdOutlineEditNote onClick={() => setEmployeeDetails(employee)} />
        </td>
      </tr>
    );
  });

  return (
    <div className='employees-table-container'>
      <Pagination
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
            <th>حذف</th>
            <th>تعديل</th>
          </tr>
        </thead>
        <tbody>{employees.length > 0 && renderEmployess}</tbody>
      </table>
      {employeeDetails && (
        <EditModel
          employeeDetails={employeeDetails}
          setEmployeeDetails={setEmployeeDetails}
        />
      )}
    </div>
  );
};

export default EmployeesTable;
