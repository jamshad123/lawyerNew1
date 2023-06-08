import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CreatePostContent.css'
import heartIcon from '../../assets/Heart.svg';
import user from '../../assets/chandru.svg';
function CreatePostContent(props) {
  const [postContent, setPostContent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryImage, setCountryImage] = useState('');

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setCountryImage(getCountryImage(selectedCountry));
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    // Do something with the post content and selected country (e.g., submit to a server)
    console.log('Post submitted:', postContent);
    console.log('Selected country:', selectedCountry);
    setPostContent(''); // Clear the input field
    setSelectedCountry(''); // Reset the selected country
    setCountryImage(''); // Reset the country image
  };

  const getCountryImage = (country) => {
    // Map country names to image URLs
    const countryImages = {
      USA: 'usa_image_url',
      UK: 'uk_image_url',
      Canada: 'canada_image_url',
      // Add more country-image mappings as needed
    };
    return countryImages[country] || '';
  };

  return (
    <div className="create-post" >
      <div className='create-post-head'>
        <a href="#" ><span><img src={heartIcon } alt="Globe" /></span><span>Create Post</span></a>
      </div>
      <div className='userimg-post w-[90%] md:w-[80%] mx-auto my-0 '>
        <div className='userimg1'><img src={user} alt='user'/></div>
        <div className='username1'>
          <div className='name'>
            Jospeh Cotchett
          </div>
          <div className='anyone'>
         
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Anyone</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        </div>
      </div>

      <form onSubmit={handlePostSubmit}  className=" w-[90%] md:w-[80%] mx-auto my-0" style={{paddingLeft:"60px"}}>
        <textarea
          value={postContent}
          onChange={handlePostChange}
          placeholder="What's on your mind......?"
          rows={4}
        />
   
      
      </form>
    </div>
  );
}

export default CreatePostContent;
