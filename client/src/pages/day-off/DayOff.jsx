import { useState } from 'react';
import { DayOffPaper, Model } from '../../components';
import { DayOffForm } from '../../components';
import './DayOff.scss';

const DayOff = () => {
  const [employee, setEmployee] = useState({});
  const [showModel, setShowModel] = useState(true);
  return (
    <div>
      <DayOffForm setShowModel={setShowModel} setEmployee={setEmployee} />
      {showModel && (
        <Model setShowModel={setShowModel}>
          <DayOffPaper employee={employee} />
        </Model>
      )}
    </div>
  );
};

export default DayOff;
