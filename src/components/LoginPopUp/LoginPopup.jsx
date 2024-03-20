import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Login' ? <></> : <input type="text" placeholder="Your Username" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        {currState === 'Sign Up' ? (
          <p>
            Already Have Account? <span onClick={() => setCurrState('Login')}>Login Here!</span>
          </p>
        ) : (
          <p>
            Create a new Account? <span onClick={() => setCurrState('Sign Up')}>Register Now</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
