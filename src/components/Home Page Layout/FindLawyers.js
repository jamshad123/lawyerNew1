import React, { useState } from 'react';
import news from '../../assets/news.svg';
import bell from '../../assets/bell.svg';
import lawyer from '../../assets/lawyer.svg';
import './NewsFeedHeader.css';
import LawyerDetail from '../LawyerDetail';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import SearchLawyer from './SearchLawyer';
function FindLawyers(props) {


  return (
    <div className='search w-[90%] md:w-[80%] mx-auto my-0'>
    <div className="news-feed-header">
      <div className='left-sec'>
        <img src={news} alt="News Icon" className="icon" />
        <span className="news-text">Find Lawyers</span>
      </div>
      <div className='right-sec'>
      </div>
    </div>
    <div className='search'>
      <SearchLawyer/>
    </div>
    </div>
  );
}

export default FindLawyers;
