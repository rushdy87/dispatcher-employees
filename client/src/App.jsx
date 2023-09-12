import './App.scss';
import { Sidebar } from './components';

function App() {
  return (
    <div className='app-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='pages'>Pages</div>
    </div>
  );
}

export default App;
