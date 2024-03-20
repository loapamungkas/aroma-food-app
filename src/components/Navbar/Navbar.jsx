import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets.js';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [navActive, setNavActive] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const { getTotalCartAmount, getTotalItem } = useContext(StoreContext);
  return (
    <div className={scroll ? 'scrolling-active navbar' : 'navbar'}>
      <Link to={'/'} onClick={() => setMenu('home')}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className={navActive ? 'nav-active navbar-menu' : 'navbar-menu'}>
        <a href="#" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>
          Home
        </a>
        <a href="#menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>
          Menu
        </a>
        <a href="#contact-us" onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to={'/cart'}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          {getTotalCartAmount() === 0 ? <></> : <div className="dot">{getTotalItem()}</div>}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign Up</button>
        <img className="hamburger" onClick={() => setNavActive((prev) => (prev === false ? true : false))} hidden src={assets.hamburger_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
