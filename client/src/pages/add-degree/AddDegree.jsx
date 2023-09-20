import { useState } from 'react';
import './AddDegree.scss';

const AddDegree = () => {
  const [degree_name, setDegree_name] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(degree_name);
    setDegree_name('');
  };

  return (
    <div className='add-degree-container'>
      <h1>اضافة شهادة</h1>
      <div className='add-degree-form'>
        <form onSubmit={handleSubmit}>
          <div className='add-degree-input'>
            <label htmlFor='degree_name'>الشهادة</label>
            <input
              type='text'
              name='degree_name'
              id='degree_name'
              value={degree_name}
              onChange={(e) => setDegree_name(e.target.value)}
            />
          </div>
          <button type='submit' className='btn_primary'>
            اضافة
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDegree;
