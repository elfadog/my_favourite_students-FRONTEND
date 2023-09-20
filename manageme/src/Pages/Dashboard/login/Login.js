import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Login.css';
import logo from './logo.png'; // Import the logo image

const Login = () => {
  useEffect(() => {
    const loginBox = document.querySelector('.login-box');
    const svg = document.querySelector('.background-svg');
    gsap.set(loginBox, { opacity: 0 });

    const tl = gsap.timeline();
    tl.to(svg, { duration: 0.5, scale: 1.5, opacity: 0, ease: 'power1.in' })
      .to(loginBox, { duration: 1, opacity: 1, ease: 'power1.out' });
    tl.play();
  }, []);

  return (
    <div className="login-container">
      <div className="login-box">
      <img src={logo} alt="Logo" className="logo" />
        <h2>ManageMe</h2>
        <form>
          <div className="form-group">
            <label htmlFor='username'>USERNAME:</label>
            <input type="text" id="username" name="username"/>
          </div>
          <div className="form-group">
            <label htmlFor='password'>PASSWORD:</label>
            <input type="password" id="password" name="password"/>
          </div>
        </form>
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default Login;

