import { useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import './Model.scss';
const Model = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className='model-container'>
      <div className='modal-contents'>
        {children}
        <span className='close-model-btn' onClick={() => navigate(-1)}>
          <MdOutlineCancel />
        </span>
      </div>
    </div>
  );
};

export default Model;
