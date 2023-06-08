import React, { useState } from 'react';
import './SearchLawyer.css'
import lawyerimg from '../../assets/harish_salve_lawyer.svg';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';



const PostList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Sample list of posts
  const posts = [
    { id: 1,
     title: 'Post 1',
     content: 'Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.',
     lawyer:lawyerimg,
     rate1:'Top Rated “4.9” ',
     exp:'Experience “20 yr+” ',
     lan:'Speaks “Telugu” ',
     lawyerName:'Harish Salve',
     location:'New Delhi, India',
    
    },
    { id: 2,
        title: 'Post 1',
        content: 'Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.',
        lawyer:lawyerimg,
        rate1:'Top Rated “4.9” ',
        exp:'Experience “20 yr+” ',
        lan:'Speaks “Telugu” ',
        lawyerName:'Harish Salve',
        location:'New Delhi, India',
       
       },
       { id: 3,
        title: 'Post 1',
        content: 'Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.',
        lawyer:lawyerimg,
        rate1:'Top Rated “4.9” ',
        exp:'Experience “20 yr+” ',
        lan:'Speaks “Telugu” ',
        lawyerName:'Harish Salve',
        location:'New Delhi, India',
       
       },
       { id: 4,
        title: 'Post 1',
        content: 'Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.',
        lawyer:lawyerimg,
        rate1:'Top Rated “4.9” ',
        exp:'Experience “20 yr+” ',
        lan:'Speaks “Telugu” ',
        lawyerName:'Harish Salve',
        location:'New Delhi, India',
       
       },
       { id: 5,
        title: 'Post 1',
        content: 'Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.',
        lawyer:lawyerimg,
        rate1:'Top Rated “4.9” ',
        exp:'Experience “20 yr+” ',
        lan:'Speaks “Telugu” ',
        lawyerName:'Harish Salve',
        location:'New Delhi, India',
       
       },

    
    // Additional posts...
  ];

  useState(() => {
    setFilteredPosts(posts.slice(0, 3));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the posts based on the search query
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredPosts(filtered.slice(0, 3));
  };

  return (
    <div className='search1 '>
      <input
        type="text"
        placeholder="Search lawyers"
        value={searchQuery}
        onChange={handleSearch}
      />

      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.id}>
                <div className='post1'>
                    <div className='right-sec'>
                        <div className='imgsec'>
                        
                        {<img src={post.lawyer} alt={post.username} />}
                           
                        </div>
                        <div className='rate-sec'>
                            <p>{post.rate1}</p>
                            <p>{post.exp}</p>
                            <p>{post.lan}</p>
                        </div>
                      
                    </div>
                    <div className='left-sec'>
                        <div className='lawyername'>
                            <div className='name'> <p>{post.lawyerName}</p></div>
                            <div className='location'> <p style={{fontSize:"10px"}}>{post.location}</p></div>
                        </div>
                        <div className='content'>  <p style={{fontSize:"15px"}}>{post.content}</p></div>
                        <div className='specialztn'>
                            <div className='special-hed'><p>Specialized In:</p></div>
                            <div className='links'>
                                <a href=''><span><img src=''/></span> <span style={{fontSize:"15px"}}>Family Law</span></a>
                                <a href=''><span><img src=''/></span> <span style={{fontSize:"15px"}}>Corporate Law</span></a>
                                <a href=''><span><img src=''/></span> <span style={{fontSize:"15px"}}>Property Law</span></a>
                            </div>
                        </div>
                    </div>
                </div>
           
            
            </li>
          ))
        ) : (
          posts.slice(0, 3).map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PostList;
