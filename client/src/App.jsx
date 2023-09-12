import { useContext } from 'react';
import { EmployeesContext } from './contexts/employees-context';
import { Sidebar } from './components';
import { ShowEmployees } from './pages';
import './App.scss';

function App() {
  const { employees } = useContext(EmployeesContext);
  console.log(employees);
  return (
    <div className='app-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='pages'>
        <ShowEmployees />
      </div>
    </div>
  );
}

export default App;
