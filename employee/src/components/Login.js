import React, { useState } from 'react';
import { useNavigate,  } from 'react-router-dom';
import backgroundImage from './login.jpg';
import Navbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = () => {
    // Check if any of the fields are empty
    if (!email || !password || !role) {
      alert('Please fill in all fields.');
      return;
    }
    

    switch (role) {
      case 'HR':
        navigate('/ManageLeave');
        break;
      case 'Employee':
        navigate('/ApplyLeave');
        break;
      default:
        console.log('Invalid role');
        break;
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const styles = {
    loginContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end', // Aligning items to the right
      height: '100vh',
      backgroundColor: 'black',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      color: 'yellow',
      paddingRight: '50px', // Added padding to the right
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
    title: {
      fontSize: '3em',
      fontWeight: 'bold',
      color: 'yellow',
      marginBottom: '20px',
    },
    navbarContainer: {
      width: '100%',
      position: 'absolute',
      top: '10px', // Adjusted to add a little gap from the top
      left: 0,
    },
    card: {
      position: 'relative', // Changed to relative
      top: '38%',
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
      right: '0px',
    },
    blurEffect: {
      backdropFilter: 'blur(5px)',
      color: 'yellow',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end', // Aligning inputs to the right
      width: '100%',
      marginBottom: '20px', // Added margin to separate inputs from buttons
      textAlign: 'left',
    },
    inputFieldContainer: {
      width: '100%',
      marginBottom: '10px', // Added margin between input fields
    },
    inputField: {
      width: '100%',
      height: '40px',
      backgroundColor: 'black', // Same as login button
      borderBottom: '2px solid yellow',
      borderRadius: '30px',
      color: 'yellow',
      fontSize: '.8em',
      fontWeight: '500',
      boxSizing: 'border-box',
      paddingLeft: '30px',
      border: '2px solid yellow',
      margin: '7px 0',
    },
    loginTitle: {
      marginBottom: '20px', // Added margin to separate login title from inputs
      fontSize: '1.5em', // Adjusted font size for login title
      fontWeight: 'bold', // Adjusted font weight for login title
      color: 'yellow', // Changed color for login title
    },
    emailLabel: {
      marginBottom: '15px', // Adjusted margin-bottom to add space between label and input field
      fontSize: '1em',
      color: 'yellow',
      // Add any additional styling specific to email label here
    },
    passwordLabel: {
      marginBottom: '10px',
      fontSize: '1em',
      color: 'yellow',
      // Add any additional styling specific to password label here
    },
    roleLabel: {
      marginBottom: '10px',
      fontSize: '1em',
      color: 'yellow',
      // Add any additional styling specific to role label here
    },
    emailInput: {
      // Add any additional styling specific to email input field here
    },
    passwordInput: {
      // Add any additional styling specific to password input field here
    },
    roleInput: {
      // Add any additional styling specific to role input field here
    },
    loginButton: {
      width: '100%',
      border: '2px solid black',
      backgroundColor: 'yellow',
      height: '40px',
      color: 'black',
      fontSize: '.9em',
      fontWeight: '500',
      letterSpacing: '1px',
      borderRadius: '30px',
      cursor: 'pointer',
      overflow: 'hidden',
      margin: '3px 0',
      fontWeight: 'bold',
    },
    forgotPasswordButton: {
      backgroundColor: 'black', // Same as login button
      color: 'yellow', // Text color set to yellow
      fontSize: '.8em', // Adjusted to match login button
      fontWeight: '500',
      textDecoration: 'none',
      padding: '8px 15px',
      borderRadius: '30px', // Adjusted to match login button
      cursor: 'pointer',
      margin: '10px',
      border: '2px solid yellow',
    },
  };

  return (
    <>
      <div style={styles.titleContainer}>
        <h1 style={styles.titlefirst}>Welcome To </h1>
        <h2 style={styles.title}>Employee Leave Management System</h2>
      </div>
      <div style={styles.loginContainer}>
        <div style={styles.navbarContainer}>
          <Navbar />
        </div>
        <div style={{ ...styles.card, ...styles.blurEffect }}>
          <h2 style={styles.loginTitle}>Login</h2>
          <div style={styles.inputContainer}>
            <div style={styles.inputFieldContainer}>
              <label style={styles.emailLabel}>ID:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                style={{ ...styles.inputField, ...styles.emailInput }}
                required // Adding the required attribute
              />
            </div>
            <div style={styles.inputFieldContainer}>
              <label style={styles.passwordLabel}>Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                style={{ ...styles.inputField, ...styles.passwordInput }}
                required // Adding the required attribute
              />
            </div>
            <div style={styles.inputFieldContainer}>
              <label style={styles.roleLabel}>Role:</label>
              <select
                value={role}
                onChange={handleRoleChange}
                style={{ ...styles.inputField, ...styles.roleInput }}
                required
              >
                <option value="">Select Role</option>
                <option value="HR">HR</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
          </div>
          <button onClick={handleLogin} style={styles.loginButton}>
            Login
          </button>
          <button onClick={handleForgotPassword} style={styles.forgotPasswordButton}>
            Forgot Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
