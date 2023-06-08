import React from 'react';
import Group from '../../assets/Group.svg';
import bell from '../../assets/bell.svg';
import lawyer from '../../assets/lawyer.svg';
import search from '../../assets/search.svg';
import './ChatPage.css';
import LawyerDetail from '../LawyerDetail';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function ChatPage() {
  return (
    <div className="news-feed-header">

      <div className="left-sec">
        <img src={Group} alt="Chat-Icon" className="icon" />
        <span className="news-text">Chats</span>
      </div>
      <div className="search-card">
      <img src={search} alt="Search Icon" className="search-icon" />
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
    {/* <div className="card">
      <div className="grid">
        <div className="section">Section 1</div>
        <div className="section">Section 2</div>
        <div className="section">Section 3</div>
        <div className="section">Section 4</div>
      </div>
    </div> */}
      <div className="right-sec">
      </div>

    </div>
  );
}

export default ChatPage;

