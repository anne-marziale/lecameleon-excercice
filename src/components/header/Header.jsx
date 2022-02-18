import React from 'react';
import LOGO from '../assets/LOGO-header.png';
import search from '../assets/icon-search.png';
import { useState } from "react";
import './Header.scss';

function Header() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
      setShowLinks(!showLinks)
  }

  return (
      <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo">
        <img className="logo" src={LOGO} alt="Logo" width="80%"></img>
      </div>
      <ul className="navbar_links">
        <div className="navbar_item slideInDown-1">
          <div className="navbar_link">
            Sell
          </div>
        </div>
        <div className="navbar_item slideInDown-2">
          <div className="navbar_link">
            Marketplace
          </div>
        </div>
        <div className="navbar_item slideInDown-3">
          <div className="navbar_link">
            Community
          </div>
        </div>
        <div className="navbar_item slideInDown-4">
          <div className="navbar_link">
            Develop
          </div>
        </div>
        <div className="navbar_item slideInDown-5">
          <div className="navbar_link">
            Ressources
          </div>
        </div>
      </ul>
      <div className="icon-container">
        <div className="login">Log In</div>
        <button className="btn-header">Get Started</button>
        <img alt="search" src={search} className="search_icon" width="6.5%"></img>
      </div>
      <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
    </div>
  );
}

export default Header;
