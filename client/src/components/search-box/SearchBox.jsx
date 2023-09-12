import { useContext, useState } from 'react';
import { EmployeesContext, TableColumnsContext } from '../../contexts';
import { MdCancel } from 'react-icons/md';

import './SearchBox.scss';

const SearchBox = ({ setShowSearchBox }) => {
  const [employee, setEmployee] = useState({ id: '', name: '' });
  const { findEmployeeById, findEmployeesByName, fetchAllEmployees } =
    useContext(EmployeesContext);
  const { columns, setColumns } = useContext(TableColumnsContext);

  const handleChange = (event) => {
    setEmployee((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (employee.id && !employee.name) {
      findEmployeeById(employee.id);
    } else if (!employee.id && employee.name) {
      findEmployeesByName(employee.name);
    } else {
      fetchAllEmployees();
    }

    // Clear the input fields after the search
    setEmployee({ id: '', name: '' });
  };

  return (
    <div className='search-box-container'>
      <div className='search-box-close' onClick={() => setShowSearchBox(false)}>
        <MdCancel />
      </div>
      <form onSubmit={handleSearch}>
        <div className='search-form'>
          <div className='search-inputs'>
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
