import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DegreesContext, JobTitleContext } from '../../contexts';
import { renderJobTitles, renderDegrees } from '../../utils/rendering';
import './EmployeeForm.scss';

const defaultValue = {
  id: '',
  name: '',
  status: 'ملاك',
  workday: 'صباحي',
  specialist_degree: '',
  joining_date: new Date().toISOString().slice(0, 10),
  phone_number: '',
  birthdate: new Date().toISOString().slice(0, 10),
  address: '',
  gender: 'ذكر',
  user_id: 1,
  job_title: 1,
  degree: 2,
  unit: 'الاستلام والتجهيز',
};

const EmployeeForm = ({
  employeeDetails,
  submitHandler,
  setEmployeeDetails,
}) => {
  const [employee, setEmployee] = useState(employeeDetails || defaultValue);
  const { degrees } = useContext(DegreesContext);
  const { jobTitles } = useContext(JobTitleContext);

  const nav = useNavigate();

  const handleChange = (event) => {
    setEmployee((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitHandler(employee);
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
      <form onSubmit={handleSubmit}>
        <div className='employee-form-inputs'>
          <div className='id_and_name'>
            <div className='input-field'>
              <label htmlFor='id'>رقم الحاسبة</label>
              <input
                type='number'
                name='id'
                id='id'
                value={employee.id}
                onChange={handleChange}
                required
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
                required
              />
            </div>
          </div>
          <div className='status-and-workday'>
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
          <div className='degrre-and-job_title'>
            <div className='input-field'>
              <label htmlFor='degree'>الشهادة</label>
              <select
                name='degree'
                id='degree'
                value={employee.degree}
                onChange={handleChange}
              >
                {renderDegrees(degrees)}
              </select>
            </div>
            <div className='input-field'>
              <label htmlFor='job_title'>العنوان الوظيفي</label>
              <select
                name='job_title'
                id='job_title'
                value={employee.job_title}
                onChange={handleChange}
              >
                {renderJobTitles(jobTitles)}
              </select>
            </div>
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
            <label htmlFor='address'>عنوان السكن</label>
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
        <div className='btns'>
          <button type='submit' className='btn_primary'>
            حفظ
          </button>
          <button
            type='reset'
            className='btn_cancel'
            onClick={(event) => {
              event.preventDefault();
              employeeDetails ? setEmployeeDetails(null) : nav('/');
            }}
          >
            عودة
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
