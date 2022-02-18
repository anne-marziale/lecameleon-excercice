import React from 'react';
import feature from '../assets/featured-image.png';
import './Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-first-container">
      <h1 className="hero-title">
        Building exactly the eCommerce website you want.
      </h1>
      <div className="hero-text">
        WooCommerce is a customizable, open-source eCommerce platform build on
        WordPress. Get started quickly and make your way.
      </div>
      <div className="btn-hero">
        <button className="btn-heroe">Start a New Store</button>
        <div className="second-hero">or Customize & Extend  </div>
      </div>
      </div>
      <div className="hero-second-container">
      <img src={feature} alt="feature" width="100%" heigth="60%" />
      </div>
    </div>
  );
}

export default Hero;
