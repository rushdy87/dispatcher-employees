import { useState } from 'react';
import { SearchBox, TableNav } from '../../components';
import './ShowEmployees.scss';

const ShowEmployees = () => {
  const [showSearchBox, setShowSearchBox] = useState(true);
  return (
    <div className='show-employees'>
      <TableNav setShowSearchBox={setShowSearchBox} />
      {showSearchBox && <SearchBox setShowSearchBox={setShowSearchBox} />}
    </div>
  );
};

export default ShowEmployees;
