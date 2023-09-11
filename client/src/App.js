import { Route, Routes } from 'react-router-dom';
import { Employees, AddEmployees } from './pages';
import { Sidebar } from './components';

import './app.css';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Employees />} />
          <Route path='/add-employee' element={<AddEmployees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
