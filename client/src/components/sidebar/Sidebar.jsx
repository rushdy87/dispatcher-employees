import { Link } from 'react-router-dom';
import { FaRegAddressBook, FaUsers } from 'react-icons/fa';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <ul>
        <li>
          <Link to='/'>
            <div className='sidebar-link'>
              <span className='sidebar-icon'>
                <FaUsers />
              </span>
              <span className='sidebar-text'>الموظفين</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <div className='sidebar-link'>
              <span className='sidebar-icon'>
                <VscGitPullRequestGoToChanges />
              </span>
              <span className='sidebar-text'>تقديم طلب اجازة</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <div className='sidebar-link'>
              <span className='sidebar-icon'>
                <FaRegAddressBook />
              </span>
              <span className='sidebar-text'>اضافة درجة وضيفية</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
