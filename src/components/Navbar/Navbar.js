import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };



  return (
    <div style={navbarStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/superheros" style={linkStyle}>SuperHeros</Link>
      <Link to="/heros" style={linkStyle}>RQHeros</Link>
    </div>
  );
};

export default Navbar;
