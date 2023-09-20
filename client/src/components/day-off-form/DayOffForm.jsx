import { useContext, useState } from 'react';

import { EmployeesContext, JobTitleContext } from '../../contexts';
import { renderJobTitles } from '../../utils/rendering';

import './DayOffForm.scss';

const defaultValue = {
  id: '',
  name: '',
  job_title: 1,
  date: new Date().toISOString().split('T')[0],
  from: new Date().toISOString().split('T')[0],
  days: 1,
};

const DayOffForm = ({ setShowModel, setEmployee }) => {
  const [values, setValues] = useState(defaultValue);

  const { jobTitles } = useContext(JobTitleContext);
  const { employees } = useContext(EmployeesContext);

  const getJobTitleById = (id) => jobTitles.find((t) => t.id === id);

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleIdChange = (event) => {
    const findedEmployee = employees.find(
      (employee) => employee.id === +event.target.value
    );
    if (findedEmployee) {
      setValues((prev) => ({
        ...prev,
        ...findedEmployee,
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        id: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployee({
      ...values,
      job_title: getJobTitleById(+values.job_title)?.title_name,
    });
    setShowModel(true);
  };

  const renderDays = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      days.push(
        <option key={day} value={day}>
          {day}
        </option>
      );
    }
    return days;
  };

  return (
    <div className='day-off-form-container'>
      <h1 className='day-off-form-header'>استمارة طلب اجازة</h1>
      <div className='day-off-form-form'>
        <form onSubmit={handleSubmit}>
          <div className='day-off-form-id-and-name'>
            <div className='day-off-form-input-field'>
              <label htmlFor='id'>رقم الحاسبة</label>
              <input
                type='number'
                name='id'
                id='id'
                value={values.id}
                onChange={handleIdChange}
                required
              />
            </div>
            <div className='day-off-form-input-field'>
              <label htmlFor='name'>الاسم</label>
              <input
                type='text'
                name='name'
                id='name'
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='day-off-form-input-field'>
            <label htmlFor='job_title'>العنوان الوظيفي</label>
            <select
              name='job_title'
              id='job_title'
              value={values.job_title}
              onChange={handleChange}
              required
            >
              {renderJobTitles(jobTitles)}
            </select>
          </div>
          <div className='day-off-form-input-field'>
            <label htmlFor='date'>التاريخ</label>
            <input
              type='date'
              name='date'
              id='date'
              value={values.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className='day-off-form-from-and-days'>
            <div className='day-off-form-input-field'>
              <label htmlFor='from'>اعتبارا من: </label>
              <input
                type='date'
                name='from'
                id='from'
                value={values.from}
                onChange={handleChange}
                required
              />
            </div>
            <div className='day-off-form-input-field'>
              <label htmlFor='days'>عدد الأيام</label>
              <select
                name='days'
                id='days'
                value={values.days}
                onChange={handleChange}
                required
              >
                {renderDays()}
              </select>
            </div>
          </div>
          <button className='btn_primary day-off-form-btn'>معاينة</button>
        </form>
      </div>
    </div>
  );
};

export default DayOffForm;
