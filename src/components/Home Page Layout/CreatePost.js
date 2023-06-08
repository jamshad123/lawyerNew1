import React, { useState } from 'react';
import Plus from '../../assets/Plus.svg';

import CreatePostContent from './CreatePostContent';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function CreatePost(props) {


  return (
    <div className="add-post-button">
       <Link to="/create-post">
        <button >
          <img src={Plus} alt="Add Post" />
        </button>
     
        </Link>

    </div>
  );
}

export default CreatePost;
