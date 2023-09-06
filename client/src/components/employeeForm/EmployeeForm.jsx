import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './EmployeeForm.css';

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

const EmployeeForm = ({ employeeDetails, handleSubmit }) => {
  const [employee, setEmployee] = useState(employeeDetails || defaultValue);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmployee((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className='employee-form-container'>
      <div className='employee-form-header'>
        <h1>
          {!employeeDetails
            ? 'اضافة موظف جديد'
            : `تعديل: ${employeeDetails.name}`}
        </h1>
      </div>
      <form
        onSubmit={(event) => {
          handleSubmit(event, employee);
          setEmployee(defaultValue);
          navigate('/');
        }}
      >
        <div className='employee-form-inputs'>
          <div className='input-field'>
            <label htmlFor='id'>رقم الحاسبة</label>
            <input
              type='number'
              name='id'
              id='id'
              value={employee.id}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='name'>الاسم</label>
            <input
              type='text'
              name='name'
              id='name'
              value={employee.name}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
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
          <div className='input-field'>
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
          <div className='input-field'>
            <label htmlFor='specialist_degree'>التخصص الدراسي</label>
            <input
              type='text'
              name='specialist_degree'
              id='specialist_degree'
              value={employee.specialist_degree}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='joining_date'>تاريخ المباشرة</label>
            <input
              type='date'
              name='joining_date'
              id='joining_date'
              value={employee.joining_date}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='phone_number'>رقم الهاتف</label>
            <input
              type='text'
              name='phone_number'
              id='phone_number'
              value={employee.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='birthdate'>تاريخ الميلاد</label>
            <input
              type='date'
              name='birthdate'
              id='birthdate'
              value={employee.birthdate}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='address'>العنوان</label>
            <input
              type='text'
              name='address'
              id='address'
              value={employee.address}
              onChange={handleChange}
            />
          </div>
          <div className='input-field'>
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
          <div className='input-field'>
            <label htmlFor='job_title'>العنوان الوظيفي</label>
            <select
              name='job_title'
              id='job_title'
              value={1}
              onChange={handleChange}
              disabled
            >
              <option value='' defaultValue>
                Dont use
              </option>
            </select>
          </div>
          <div className='input-field'>
            <label htmlFor='degree'>التحصيل الدراسي</label>
            <select
              name='degree'
              id='degree'
              value={1}
              onChange={handleChange}
              disabled
            >
              <option value='' defaultValue>
                Dont use
              </option>
            </select>
          </div>
          <div className='input-field'>
            <label htmlFor='unit'>الوحدة</label>
            <input
              type='text'
              name='unit'
              id='unit'
              value={employee.unit}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className='employee-form-save-btn'>حفظ</button>
      </form>
    </div>
  );
};

// Define default prop values outside the component
EmployeeForm.defaultProps = {
  employeeDetails: null, // You can set your default value here
};

export default EmployeeForm;
