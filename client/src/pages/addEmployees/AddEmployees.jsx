import { EmployeeForm } from '../../components';
import axios from 'axios';

const AddEmployees = () => {
  const createNewEmployee = (event, employee) => {
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
      .post('http://localhost:3030/employees/newEmployees', {
        employeeData: { ...employee, ...formDataObject },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <EmployeeForm handleSubmit={createNewEmployee} />
    </div>
  );
};

export default AddEmployees;
