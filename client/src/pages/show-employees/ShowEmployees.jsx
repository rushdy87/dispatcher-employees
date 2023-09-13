import { useState } from 'react';
import { EmployeesTable, SearchBox, TableNav } from '../../components';
import './ShowEmployees.scss';

const ShowEmployees = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <div className='show-employees'>
      <TableNav setShowSearchBox={setShowSearchBox} />
      {showSearchBox && <SearchBox setShowSearchBox={setShowSearchBox} />}
      <EmployeesTable />
    </div>
  );
};

export default ShowEmployees;
