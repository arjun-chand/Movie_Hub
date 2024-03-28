import React from 'react'
import loading from './spinner.svg';

const Spinner = () => {
  return (
    <div>
       <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
}

export default Spinner;
