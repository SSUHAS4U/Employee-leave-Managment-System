import React from 'react';
import EmployeeImage from './employee.jpg';

const Elms = () => {
  return (
    <div>
      <img src={EmployeeImage} alt="Employee" width="350" height="215" />
      <h1 style={{ color: '#000000' }}>ELMS</h1>
    </div>
  );
};

export default Elms;
