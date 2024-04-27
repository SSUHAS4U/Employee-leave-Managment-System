import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';
import backgroundImage from './login.jpg';
import Navbar from './Navbar';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e) => {
    const data = {
      username: email,
      password: password
    };
    console.log(data);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/adminlogin', data);

      if (response.status === 200) {
        console.log('Signup successful');
        navigate('/AddEmployee');
        // Redirect or do something after successful signup
      } else {
        console.error('Signup failed');
        alert('please fill the details correctly')
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const styles = {
    signupContainer: {
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      backgroundImage: `url(${backgroundImage})`, // Add background image
      backgroundSize: 'cover', // Cover the entire container
      height: '100vh', // Full height of the viewport
      backdropFilter: 'blur(5px)', // Add blur effect
    },
    navbarContainer: {
      width: '100%',
      position: 'absolute',
      top: '10px', // Adjusted to add a little gap from the top
      left: 0,
    },  
    titleContainer: {
      position: 'absolute',
      top: '50%',
      left: '10%',
      transform: 'translateY(-50%)',
      textAlign: 'left',
    },
    titlefirst:{
      fontSize: '3em',
      fontWeight: 'bold',
      color: 'yellow',
      marginBottom: '20px',
      textAlign: 'center',
    },
    titles: {
      fontSize: '3em',
      fontWeight: 'bold',
      color: 'yellow',
      marginBottom: '20px',
    },
    formsContainer: {
    position: 'absolute',
    top: '55%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '40px',
    boxShadow: '0 0 40px rgba(255, 255, 0, 1)', // Adjusted boxShadow property
    padding: '30px',
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'yellow',
    right: '50px', 
    textAlign: 'left',
    },
    title: {
      fontSize: '1.8em',
      color: 'yellow', // Make text yellow
      fontWeight: '500',
      margin: '15px 0 30px 0',
      textAlign:'center',
    },
    inputField: {
    width: '100%',
    height: '40px',
    backgroundColor: 'black', // Same as login button
    borderBottom: '2px solid yellow',
    borderRadius: '30px',
    margin: '10px 0',
    color: 'yellow',
    fontSize: '.8em',
    fontWeight: '500',
    boxSizing: 'border-box',
    paddingLeft: '30px',
    border: '2px solid yellow',
    },
    button: {
      position: 'relative',
      width: '94%',
      border: '2px solid yellow',
      backgroundColor: 'yellow',
      height: '40px',
      color: 'black', // Make text yellow
      fontSize: '.8em',
      fontWeight: '500',
      letterSpacing: '1px',
      borderRadius: '30px',
      margin: '10px',
      cursor: 'pointer',
      overflow: 'hidden',
      fontWeight: 'bold',
    },
};


  return (
    <div className="signup-container" style={styles.signupContainer}>
      <div style={styles.navbarContainer}>
      <Navbar></Navbar>
      </div>
      <div style={styles.titleContainer}>
        <h1 style={styles.titlefirst}>Welcome To </h1>
        <h2 style={styles.titles}>Employee Leave Management System</h2>
      </div>
      <div className='forms-container' style={styles.formsContainer}>
        <form className="sign-up-form">
          <h2 className="title" style={styles.title}>Admin Login</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <label>User:</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="off"
              style={styles.inputField}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="off"
              style={styles.inputField}
            />
          </div>
          <button className="btn" onClick={handleSignup} style={styles.button}>Login</button>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
