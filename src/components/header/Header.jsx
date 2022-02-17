import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="navbar-header">
        <div className="nav-logo">WOO COMMERCE</div>
        <ul className="navbar">
          <li>Sell</li>
          <li>Marketplace</li>
          <li>Community</li>
          <li>Develop</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="user">
        <div>Log In</div>
        <button className='btn-user'>Get Started</button>
        <div className="logo"><FaSearch /></div>
      </div>
    </div>
  );
}

export default Header;
