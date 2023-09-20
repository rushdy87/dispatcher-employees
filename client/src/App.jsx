import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components';
import { AddDegree, AddEmployee, DayOff, ShowEmployees } from './pages';
import './App.scss';

function App() {
  return (
    <div className='app-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='pages'>
        <Routes>
          <Route path='/' element={<ShowEmployees />} />
          <Route path='/add-employee' element={<AddEmployee />} />
          <Route path='/add-degree' element={<AddDegree />} />
          <Route path='/day-off' element={<DayOff />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
