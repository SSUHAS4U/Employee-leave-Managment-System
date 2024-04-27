import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.navbar}>
      <div style={styles.heading}>Employee</div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/employee" style={styles.navLink}>Dashboard</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'yellow', // Set navbar background color to yellow
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black', // Set text color to black
    border: '2px solid black', // Add a 2px solid black border
  },
  heading: {
    color: 'black', // Set heading text color to black
    fontWeight: 'bold', // Make heading text bold
    marginLeft: '20px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'black', // Set link text color to black
    textDecoration: 'none',
    fontWeight: 'bold', // Make link text bold
  },
};

export default Navbar;
