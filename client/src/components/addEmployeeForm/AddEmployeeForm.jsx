import { useState } from 'react';
import axios from 'axios';
import './AddEmployeeForm.css';
const defaultValue = {
  id: '',
  name: '',
  status: '',
  workday: '',
  specialist_degree: '',
  joining_date: '',
  phone_number: '',
  birthdate: '',
  address: '',
  gender: '',
  user_id: 1,
  job_title: 1,
  degree: 1,
  unit: 'الاستلام والتجهيز',
};

const AddEmployeeForm = ({ setAddEmployees }) => {
  const [employee, setEmployee] = useState(defaultValue);

  const handleChange = (event) => {
    setEmployee((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCreation = (event) => {
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
        setEmployee(defaultValue);
        setAddEmployees(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='add-employee-container'>
      <form onSubmit={handleCreation}>
        <div className='add-employee-form-container'>
          <div className='add-employee-input-field'>
            <label htmlFor='id'>رقم الحاسبة</label>
            <input
              type='number'
              name='id'
              id='id'
              value={employee.id}
              onChange={handleChange}
            />
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='name'>الاسم</label>
            <input
              type='text'
              name='name'
              id='name'
              value={employee.name}
              onChange={handleChange}
            />
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='status'>الحالة الوظيفية</label>
            <select
              name='status'
              id='status'
              value={employee.status}
              onChange={handleChange}
            >
              <option value='ملاك' defaultValue>
                ملاك
              </option>
              <option value='عقد'>عقد</option>
            </select>
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='workday'>نوع الدوام</label>
            <select
              name='workday'
              id='workday'
              value={employee.workday}
              onChange={handleChange}
            >
              <option value='صباحي' defaultValue>
                صباحي
              </option>
              <option value='مناوب'>مناوب</option>
            </select>
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='specialist_degree'>التخصص الدراسي</label>
            <input
              type='text'
              name='specialist_degree'
              id='specialist_degree'
              value={employee.specialist_degree}
              onChange={handleChange}
            />
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='joining_date'>تاريخ المباشرة</label>
            <input
              type='date'
              name='joining_date'
              id='joining_date'
              value={employee.joining_date}
              onChange={handleChange}
            />
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='phone_number'>رقم الهاتف</label>
            <input
              type='text'
              name='phone_number'
              id='phone_number'
              value={employee.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='birthdate'>تاريخ الميلاد</label>
            <input
              type='date'
              name='birthdate'
              id='birthdate'
              value={employee.birthdate}
              onChange={handleChange}
            />
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='address'>العنوان</label>
            <input
              type='text'
              name='address'
              id='address'
              value={employee.address}
              onChange={handleChange}
            />
          </div>
          <div className='add-employee-input-field'>
            <label htmlFor='gender'>النوع</label>
            <select
              name='gender'
              id='gender'
              value={employee.gender}
              onChange={handleChange}
            >
              <option value='ذكر' defaultValue>
                ذكر
              </option>
              <option value='أنثى'>أنثى</option>
            </select>
          </div>
          <button>اضافة</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
