import { useState } from 'react';
import axios from 'axios';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import usePagination from '../../hooks/usePagination';
import { EmployeeForm } from '../';
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

  const handleEdit = (employee) => {
    setEmployeeDetails(employee);
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
          <MdOutlineEditNote onClick={() => handleEdit(employee)} />
        </td>
      </tr>
    );
  });

  return (
    <div className='employees-table-container'>
      <div className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
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
        <div className='edit-model'>
          <div className='modal-contents'>
            <EmployeeForm
              employeeDetails={employeeDetails}
              handleSubmit={(event, employee) => {
                event.preventDefault();
                // Create a FormData object from the form
                const formData = new FormData(event.target);

                // Create an object to store form data
                const formDataObject = {};

                // Iterate through FormData and populate the object
                formData.forEach((value, key) => {
                  formDataObject[key] = value;
                });

                axios
                  .patch(`http://localhost:3030/employees/${employee.id}`, {
                    employeeData: {
                      ...employee,
                      ...formDataObject,
                      job_title: 1,
                      degree: 1,
                    },
                  })
                  .then((response) => {
                    console.log(response.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                setEmployeeDetails(null);
              }}
            />
            <button onClick={() => setEmployeeDetails(null)}>Cansel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeesTable;
