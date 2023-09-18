import { useContext, useState } from 'react';
import { MdCancel } from 'react-icons/md';

import {
  EmployeesContext,
  TableColumnsContext,
  DegreesContext,
  JobTitleContext,
} from '../../contexts';
import { renderJobTitles, renderDegrees } from '../../utils/rendering';

import './SearchBox.scss';
import { objectToQueryString } from '../../utils/api/api-helpers';

const defaultSearchValue = {
  id: '',
  name: '',
  gender: '',
  status: '',
  degree: '',
  job_title: '',
};

const SearchBox = ({ setShowSearchBox }) => {
  const [employee, setEmployee] = useState(defaultSearchValue);
  const { findEmployeeById, findEmployeesByKey } = useContext(EmployeesContext);
  const { columns, setColumns } = useContext(TableColumnsContext);
  const { degrees } = useContext(DegreesContext);
  const { jobTitles } = useContext(JobTitleContext);

  const handleChange = (event) => {
    setEmployee((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (employee.id) {
      findEmployeeById(employee.id);
    } else {
      const query = objectToQueryString(employee);
      findEmployeesByKey(query);
    }

    // Clear the input fields after the search
    setEmployee(defaultSearchValue);
  };

  return (
    <div className='search-box-container'>
      <div className='search-box-close' onClick={() => setShowSearchBox(false)}>
        <MdCancel />
      </div>
      <form onSubmit={handleSearch}>
        <div className='search-form'>
          <div className='search-inputs'>
            <div className='id-and-name'>
              <div className='search-input'>
                <label htmlFor='id'>رقم الحاسبة</label>
                <input
                  type='number'
                  name='id'
                  id='id'
                  value={employee.id}
                  onChange={handleChange}
                />
              </div>
              <div className='search-input'>
                <label htmlFor='name'>الاسم</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={employee.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='status-workday-degree'>
              <div className='search-input'>
                <label htmlFor='gender'>النوع</label>
                <select
                  name='gender'
                  id='gender'
                  value={employee.gender}
                  onChange={handleChange}
                >
                  <option value='all' defaultValue>
                    الجميع
                  </option>
                  <option value='ذكر'>ذكر</option>
                  <option value='أنثى'>أنثى</option>
                </select>
              </div>
              <div className='search-input'>
                <label htmlFor='status'>الحالة الوظيفية</label>
                <select
                  name='status'
                  id='status'
                  value={employee.status}
                  onChange={handleChange}
                >
                  <option value='all' defaultValue>
                    الجميع
                  </option>
                  <option value='ملاك'>ملاك</option>
                  <option value='عقد'>عقد</option>
                </select>
              </div>
              <div className='search-input'>
                <label htmlFor='job_title'>العنوان الوظيفي</label>
                <select
                  name='job_title'
                  id='job_title'
                  value={employee.job_title}
                  onChange={handleChange}
                >
                  <option value='all' defaultValue>
                    الجميع
                  </option>
                  {renderJobTitles(jobTitles)}
                </select>
              </div>
              <div className='search-input'>
                <label htmlFor='degree'>الشهادة</label>
                <select
                  name='degree'
                  id='degree'
                  value={employee.degree}
                  onChange={handleChange}
                >
                  <option value='all' defaultValue>
                    الجميع
                  </option>
                  {renderDegrees(degrees)}
                </select>
              </div>
            </div>
          </div>
          <div className='columns-line'>
            <span>الاعمدة</span>
            <div className='line' />
          </div>
          <div className='columns'>
            <div className='columns-checkbox'>
              <label htmlFor='column_id'>رقم الحاسبة</label>
              <input
                type='checkbox'
                name='columns'
                id='column_id'
                checked={columns.id.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    id: { ...columns.id, value: e.target.checked },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='column_name'>الاسم</label>
              <input
                type='checkbox'
                name='columns'
                id='column_name'
                checked={columns.name.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    name: { ...columns.name, value: e.target.checked },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='job_title'>العنوان الوظيفي</label>
              <input
                type='checkbox'
                name='columns'
                id='job_title'
                checked={columns.job_title.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    job_title: {
                      ...columns.job_title,
                      value: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='degree'>التحصيل الدراسي</label>
              <input
                type='checkbox'
                name='columns'
                id='degree'
                checked={columns.specialist_degree.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    specialist_degree: {
                      ...columns.specialist_degree,
                      value: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='degree'>الشهادة</label>
              <input
                type='checkbox'
                name='columns'
                id='degree'
                checked={columns.degree.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    degree: { ...columns.degree, value: e.target.checked },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='status'>الحالة الوظيفية</label>
              <input
                type='checkbox'
                name='columns'
                id='status'
                checked={columns.status.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    status: { ...columns.status, value: e.target.checked },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='workday'>نوع الدوام</label>
              <input
                type='checkbox'
                name='columns'
                id='workday'
                checked={columns.workday.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    workday: { ...columns.workday, value: e.target.checked },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='joining_date'>تاريخ المباشرة</label>
              <input
                type='checkbox'
                name='columns'
                id='joining_date'
                checked={columns.joining_date.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    joining_date: {
                      ...columns.joining_date,
                      value: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='phone_number'>رقم الهاتف</label>
              <input
                type='checkbox'
                name='columns'
                id='phone_number'
                checked={columns.phone_number.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    phone_number: {
                      ...columns.phone_number,
                      value: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='birthdate'>تاريخ الميلاد</label>
              <input
                type='checkbox'
                name='columns'
                id='birthdate'
                checked={columns.birthdate.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    birthdate: {
                      ...columns.birthdate,
                      value: e.target.checked,
                    },
                  })
                }
              />
            </div>
            <div className='columns-checkbox'>
              <label htmlFor='address'>العنوان</label>
              <input
                type='checkbox'
                name='columns'
                id='address'
                checked={columns.address.value}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    address: { ...columns.address, value: e.target.checked },
                  })
                }
              />
            </div>
          </div>
          <button className='btn_primary search-box-btn'>بحث</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
