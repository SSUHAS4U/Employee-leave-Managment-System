import React, { useState } from 'react'; // Import useState
import { Link, useLocation } from 'react-router-dom'; // Use useLocation instead of useNavigate

const Navbar = () => {
  const location = useLocation(); // Use useLocation hook to get current location
  const [hoveredLink, setHoveredLink] = useState(null); // State to track hovered link
  
  return (
    <nav style={styles.navbar}>
      <div style={styles.heading}>ELMS</div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link
            to="/login"
            style={{ ...styles.navLink, ...(location.pathname === '/login' || hoveredLink === '/login' ? styles.navLinkHover : null) }}
            onMouseEnter={() => setHoveredLink('/login')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Login
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/adminlogin"
            style={{ ...styles.navLink, ...(location.pathname === '/adminlogin' || hoveredLink === '/adminlogin' ? styles.navLinkHover : null) }}
            onMouseEnter={() => setHoveredLink('/adminlogin')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Admin Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'yellow',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '30px',
    border: '2px solid yellow',
    position: 'fixed',
    width: '100%',
    zIndex: 9999,
    boxSizing: 'border-box',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    transition: 'background-color 0.3s', // Smooth transition for background color change
    padding: '8px 15px', // Added padding for better click area
    borderRadius: '20px', // Rounded corners for better appearance
    fontWeight: 'bold',
  },
  navLinkHover: {
    backgroundColor: 'white', // Background color when hovering
  },
};

export default Navbar;
