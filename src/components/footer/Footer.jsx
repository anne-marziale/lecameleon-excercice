import React from 'react';
import picture from '../assets/footer-section.jpg';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import LOGO from '../assets/LOGO.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import social from '../assets/social.png';
import instagram from '../assets/instagram.png';
import automatic from '../assets/automatic.png';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img className="picture" src={picture} alt="pic" width="100%" />
        <div className="footer-first-container">
          <div className="footer-title">
            WooCommerce -the most customizable eCommerce platform for building
            your online business.
          </div>
          <button className="footer-btn">GET STARTED</button>
        </div>
        <div className="footer-second-container">
          <div className="title-container">
            <div className="title-logo">
              <img src={logo1} alt="logo1" />
              30 day money back guarantee
            </div>
            <div className="title-logo">
              <img src={logo2} alt="logo2" />
              Support teams across the world
            </div>
            <div className="title-logo">
              <img src={logo3} alt="logo3" />
              Safe & Secure online payment
            </div>
          </div>
          <div className="logo-footer">
            <img src={LOGO} alt="logo" />
          </div>
        </div>
        <div className="line-footer"></div>
        <div className="footer-third-container">
          <div className="column-container">
            <ul className="column-1">WHO WE ARE
            <li className="li-container1">About</li>
            <li className="li-container">Team</li>
            <li>Work With Us</li>
            </ul>
            <ul className="column-2"> WOOCOMMERCE
            <li className="li-container1">Features</li>
            <li className="li-container">Payments</li>
            <li className="li-container">Marketing</li>
            <li className="li-container">Shipping</li>
            <li className="li-container">Extension Store</li>
            <li className="li-container">eCommerce blog</li>
            <li className="li-container">Development blog</li>
            <li className="li-container">Ideas board</li>
            <li className="li-container">Mobile App</li>
            <li className="li-container">Community</li>
            <li className="li-container">Style Guide</li>
            <li className="li-container">Email Newsletter</li>
            </ul>
            <ul className="column-3">OTHERS PRODUCTS
            <li className="li-container1">Storefront</li>
            <li className="li-container">WooSlider</li>
            <li className="li-container">Sensei</li>
            <li className="li-container">Sensei Extensions</li>
            </ul>
            <ul className="column-4">OTHER PRODUCT
            <li className="li-container1">Documentation</li>
            <li className="li-container">Customizations</li>
            <li className="li-container">Support Policy</li>
            <li className="li-container">Contact</li>
            <li className="li-container">COVID-19 Resources</li>
            <li className="li-container">Privacy Notice for</li>
            <li className="li-container">California Users</li>
            </ul>
            <ul className="column-5">WE RECOMMEND
            <li className="li-container1">WooExperts</li>
            <li className="li-container">Hosting Solutions</li>
            <li className="li-container">Pre-sales FAQ</li>
            <li className="li-container">Success Stories</li>
            <li className="li-container">Design Feedback Group</li>
            </ul>
          </div>
        </div>
        <div className="footer-fourth-container">
          <div className="social-media-container">
          <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={social} alt="social" />
            <img src={instagram} alt="instagram" />
          </div>
          <div className="policy-footer">
            COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
          </div>
          <img src={automatic} alt="automatic" width="25%" height="30%"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
