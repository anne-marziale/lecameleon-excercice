import React from 'react';
import { FaSearch } from 'react-icons/fa';
import LOGO from '../assets/LOGO-header.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="navbar-header">
      <img src={LOGO} alt="logo-header"/>
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
