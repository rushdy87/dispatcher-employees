import axios from 'axios';
import { MdOutlineCancel } from 'react-icons/md';
import './EditModel.css';
import { EmployeeForm } from '..';

const EditModel = ({ employeeDetails, setEmployeeDetails }) => {
  const editHandeller = (event, employee) => {
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
        setEmployeeDetails(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='edit-model'>
      <div className='modal-contents'>
        <EmployeeForm
          employeeDetails={employeeDetails}
          handleSubmit={editHandeller}
        />
        <span
          className='close-model-btn'
          onClick={() => setEmployeeDetails(null)}
        >
          <MdOutlineCancel />
        </span>
      </div>
    </div>
  );
};

export default EditModel;
