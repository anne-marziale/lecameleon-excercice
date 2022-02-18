import React from 'react';
import first_arrow from '../assets/fleche1.png';
import second_arrow from '../assets/fleche2.png';
import './Testimonials.scss';

function Testimonials() {
  return (
    <div className="testimonials">
      <h1 className="title">Trusted by Agencies</h1>
      <h1 className="title">& Store Owners</h1>

      <div className="text">
        No other eCommerce platform allows people to start for free and grow
        their store as their business grows. More importantly, WooCommerce
        doesn't charge you a portion of your profits as your business grows!
      </div>
      <div className='arrow'> 
      <img src={second_arrow} alt="second-arrow" className='second-arrow' />
      <img src={first_arrow} alt="first-arrow" className='first-arrow' />
      </div>
    </div>
  );
}

export default Testimonials;
