import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magni accusamus ut veniam distinctio optio tempore, obcaecati placeat possimus inventore mollitia fuga totam nam tenetur in porro. Maxime, provident fugit?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Aroma</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right" id="contact-us">
          <h2>Contact Us</h2>
          <ul>
            <li>+62-896-4901-0822</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright © 2024 - All right reserved Loa Pamungkas</p>
    </div>
  );
};

export default Footer;
