import './EmployeesTable.css';

const EmployeesTable = ({ columns, employees }) => {
  const renderHeader = Object.keys(columns).map((key) => {
    if (columns[key].value) {
      return <th key={key}>{columns[key].ar}</th>;
    }
    return null;
  });

  const renderEmployess = employees.map((employee) => {
    return (
      <tr key={employee.id}>
        {Object.keys(columns).map((key) => {
          if (columns[key].value) {
            return <td key={key}>{employee[key]}</td>;
          }
          return null;
        })}
      </tr>
    );
  });

  return (
    <div className='table_container'>
      <table>
        <thead>
          <tr>{renderHeader}</tr>
        </thead>
        <tbody>{employees.length > 0 && renderEmployess}</tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
