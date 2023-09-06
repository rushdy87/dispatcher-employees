import { Route, Routes } from 'react-router-dom';
import { Employees, AddEmployees } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Employees />} />
        <Route path='/add-employee' element={<AddEmployees />} />
      </Routes>
    </div>
  );
}

export default App;
