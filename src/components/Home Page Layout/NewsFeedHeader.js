import React, { useState } from 'react';
import news from '../../assets/news.svg';
import bell from '../../assets/bell.svg';
import lawyer from '../../assets/lawyer.svg';
import './NewsFeedHeader.css';
import LawyerDetail from '../LawyerDetail';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function NewsFeedHeader(props) {


  return (
    <div className="news-feed-header">
      <div className='left-sec'>
        <img src={news} alt="News Icon" className="icon" />
        <span className="news-text">News</span>
      </div>
    </div>
  );
}

export default NewsFeedHeader;
