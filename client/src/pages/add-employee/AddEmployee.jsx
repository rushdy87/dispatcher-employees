import { useContext, useState } from 'react';
import { EmployeesContext } from '../../contexts';

import { EmployeeForm } from '../../components';
import './AddEmployee.scss';

const AddEmployee = () => {
  const [message, setMessage] = useState('');
  const { addEmployee } = useContext(EmployeesContext);

  const handleAddingEmployee = async (employee) => {
    try {
      const result = await addEmployee(employee);
      setMessage(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='add-employee-container'>
      {message && <p className='add-employee-message'>{message}</p>}
      <EmployeeForm submitHandler={handleAddingEmployee} />
    </div>
  );
};

export default AddEmployee;

/**
 {
          id: 111,
          name: 'faia',
          status: 'ملاك',
          workday: 'صباحي',
          specialist_degree: 'هندسه مواد/قسم معادن',
          joining_date: new Date().toISOString().slice(0, 10),
          phone_number: '1234567',
          birthdate: new Date().toISOString().slice(0, 10),
          address: 'karbalaa',
          gender: 'أنثى',
          user_id: 1,
          job_title: 1,
          degree: 2,
          unit: 'الاستلام والتجهيز',
        }
 */
