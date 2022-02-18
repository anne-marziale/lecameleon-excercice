import React from 'react';
import commerce from '../assets/ecommerce.png';
import first from '../assets/first-pic.png';
import second from '../assets/second-pic.jpg';
import './Feature.scss';

function Feature() {
  return (
    <div className="feature">
      <div className="first-container">
        <img src={commerce} className= "ecommerce" alt="ecommerce" width="100%" />
      </div>
      <div className="second-container">
        <div className="first-paragraph">
        <img src={first} alt="first-pic" className="first-picture" />
        <div className='first-text-container'>
          <h1 className="first-title">Develop Without Limits</h1>
          <div className="first-text">
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </div>
          <button className="first-btn">Read the Documentation</button>
          </div>
        </div>
        <div className='line-feature'></div>
        <div className="second-paragraph">
        <img src={second} alt="second-pic" className="second-picture" width="80%"/>
        <div className='second-text-container'>
          <h1 className="second-title">Know our Global Community</h1>
          <div className="second-text">
            WooCommerce is one of the fastest-growing eCommerce communities.
            We’re proud that the helpfulness of the community and a wealth of
            online resources are frequently cited as reasons our users love it.
            There are 80+ meetups worldwide!
          </div>
          <button className="second-btn">Read the Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
