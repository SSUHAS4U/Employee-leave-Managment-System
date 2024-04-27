// welcome.js
import React from 'react';
import Navbar from './components/Navbar'; // Assuming Navbar.js is in the same directory

const Welcome = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component here */}
      {/* Add your content for the welcome page */}
      <h1>Welcome to the Employee Leave Management System!</h1>
      <p>This is the homepage of the ELMS application.</p>
    </div>
  );
};

export default Welcome;
