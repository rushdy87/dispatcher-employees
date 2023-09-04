import './EmployeesTable.css';
const EmployeesTable = ({ employees }) => {
  const renderEmployess = employees.map((employee) => {
    return (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.job_title}</td>
        <td>{employee.status}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>رقم الحاسبة</th>
            <th>الاسم</th>
            <th>العنوان الوظيفي</th>
            <th>الحالة الوظيفية</th>
          </tr>
        </thead>
        <tbody>{employees.length > 0 && renderEmployess}</tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
