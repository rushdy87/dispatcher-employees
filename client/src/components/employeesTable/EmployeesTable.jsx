import { useContext } from 'react';
import { EmployeesContext } from '../../contexts';
import axios from 'axios';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import './EmployeesTable.css';

const EmployeesTable = ({
  columns,
  currentData,
  setEmployeeDetails,
  printable,
}) => {
  const { deleteEmployee } = useContext(EmployeesContext);

  const handleDeleteEmployee = (employee) => {
    const confirmDelete = window.confirm(
      'سيتم حذف الموظف من قاعدة البيانات الرئيسية، حيث لا يمكن استرجاعه مرة أخرى. هل أنت متأكد من الحذف؟'
    );

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3030/employees/${employee.id}`)
        .then(({ data }) => {
          console.log(data.message);
          // Update the UI by calling the deleteEmployee function from context
          deleteEmployee(employee.id);
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
          alert('حدث خطأ أثناء الحذف. الرجاء المحاولة مرة أخرى.');
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
        {!printable && (
          <>
            <td>
              <MdPersonRemoveAlt1
                onClick={() => handleDeleteEmployee(employee)}
              />
            </td>
            <td>
              <MdOutlineEditNote onClick={() => setEmployeeDetails(employee)} />
            </td>
          </>
        )}
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            {renderHeader}
            {!printable && (
              <>
                <th>حذف</th>
                <th>تعديل</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>{currentData.length > 0 && renderEmployess}</tbody>
      </table>
    </>
  );
};

export default EmployeesTable;
