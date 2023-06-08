import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import NewsFeed from './components/Home Page Layout/NewsFeed';
import LawyerDetail from './components/LawyerDetail';
import CreatePostContent from './components/Home Page Layout/CreatePostContent';
import CreatePost from './components/Home Page Layout/CreatePost';
import FindLawyers from './components/Home Page Layout/FindLawyers';
import LoginPage from './components/LoginPage';
import ChatPage from './components/Home Page Layout/ChatPage';
import Settings from './components/Home Page Layout/Settings';
import Navbar from './components/Navbar';
import Notification from './components/Home Page Layout/Notifications';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/lawyer-detail" element={<LawyerDetail/>} />
        <Route path="/create-post" element={<CreatePostContent />} />
        <Route path="/search-post" element={<FindLawyers />} />
        <Route path="/chat-page" element={<ChatPage/>} />
        <Route path="/notifications" element={<Notification/>} />
        <Route path="/settings" element={<Settings/>} />
        
      </Routes>
 
  
    </Router>
    
  );
}

export default App;
