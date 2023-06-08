import React from 'react';
import logo from '../assets/logo.png';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="container">
      <div className="logoContainer">
        <img src={logo} alt='logo' className="logo" />
      </div>
      <div className="card">
        <h2 className="heading"><span>JOIN AS PUBLIC OR LAWYER</span></h2>
        <div className="buttonContainer">
          <button className="button publicButton">PUBLIC</button>
          <button className="button lawyerButton">LAWYER</button>
        </div>
        <div>
        <Link to="/news-feed"><button className="join">JOIN AS PUBLIC</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

