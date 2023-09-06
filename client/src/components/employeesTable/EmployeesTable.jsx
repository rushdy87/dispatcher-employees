import { useState } from 'react';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import './EmployeesTable.css';
import axios from 'axios';
import { EmployeeForm } from '../';

const EmployeesTable = ({ columns, employees }) => {
  const [employeeDetails, setEmployeeDetails] = useState(null);

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

  const renderEmployess = employees.map((employee) => {
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
