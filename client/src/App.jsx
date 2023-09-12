import { Sidebar } from './components';
import { ShowEmployees } from './pages';
import './App.scss';

function App() {
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
