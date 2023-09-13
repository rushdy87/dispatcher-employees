import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components';
import { AddEmployee, ShowEmployees } from './pages';
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
