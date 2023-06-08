import React from 'react';
import './Footer.css'
import home from '../../assets/home.svg';
import settings from '../../assets/settings.svg';
import vector from '../../assets/Vector.svg';
import account from '../../assets/account_balance.svg';
import search from '../../assets/search.svg';

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='bottomfooter'>
      <a href="#" className="footer-link">
      <Link to="/news-feed">
        <img src={home} alt='home'/>
        {/* <span className="footer-text active">Home</span> */}
        </Link>
      </a>
      <Link to="/search-post">
     
      <img src={search} alt='home'/>
        {/* <span className="footer-text">Search</span> */}
        </Link>

      <a href="#" className="footer-link">
      <img src={account} alt='home'/>
        {/* <span className="footer-text">Search</span> */}
      </a>

      <a href="#" className="footer-link">
      <Link to="/chat-page">
      <img src={vector} alt='home'/>
        {/* <span className="footer-text">Message</span> */}
        </Link>
        
      </a>
      <a href="#" className="footer-link">
      <img src={settings} alt='home'/>
        {/* <span className="footer-text">Settings</span> */}
      </a>
    </footer>
  );
};

export default Footer;
