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
        {/* <ShowEmployees /> */}
        <AddEmployee />
      </div>
    </div>
  );
}

export default App;
