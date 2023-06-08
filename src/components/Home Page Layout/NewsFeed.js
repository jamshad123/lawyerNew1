import React from 'react';
import { Card } from 'antd';
import './NewsFeed.css';

import heartIcon from '../../assets/Heart.svg';
import commentIcon from '../../assets/comment.svg';
import shareIcon from '../../assets/Send.svg';
import saveIcon from '../../assets/save.svg';
import poster from '../../assets/Poster.png';
import user from '../../assets/chandru.svg';
import NewsFeedHeader from './NewsFeedHeader';
import ButtonRow from './ButtonRow';
import CreatePost from './CreatePost';

const { Meta } = Card;

const NewsFeed = () => {
  const newsData = [
    {
      id: 1,
      tittle:'Sharmeen Hakim',
      content: 'The new amendment to IT Rules 2022 prima facie lacks the necessary safeguards, the Bombay High Court observed on Monday in the plea filed by stand',
      postImage:poster,
      userImage: user,
     
    },
    {
      id: 2,
      tittle:'Sharmeen Hakim',
      content: 'The new amendment to IT Rules 2022 prima facie lacks the necessary safeguards, the Bombay High Court observed on Monday in the plea filed by stand',
      postImage: poster,
      userImage: user,
      
    },
  ];

  return (
    <div className="news-sec w-[90%] md:w-[80%] mx-auto my-0 feed-sec">
      <NewsFeedHeader/>
      <ButtonRow/>
      {newsData.map(newsItem => (
        
        <Card key={newsItem.id}
         style={{ marginBottom: '16px' }}>
          <div className='user-sec'>
            <div className='userimg'>{<img src={newsItem.userImage} alt={newsItem.username} />}</div>
            <div className='username'>  <p style={{fontWeight:"bold"}}>{newsItem.tittle}</p></div>
          </div>
          <Meta className='descriptn'
            
           
            
            description={
              <>
                <p style={{fontFamily:"Open Sans",fontWeight:"900",textDecorationColor:"black"}}>{newsItem.content}</p>
                <a href="#" style={{fontWeight:"bold"}}>...See More</a>
              </>
            }
          />
          <div className='cover'>
          {<img src={newsItem.postImage} alt={newsItem.title} />}
          </div>
          
          <div className='social-media'>
            <div className='like'>
              <img src={heartIcon} alt="Like" style={{fontWeight:"600"}}/>
              <p style={{fontFamily:"Open Sans",fontWeight:"semibold"}}>Like</p>
            </div>
            <div className='like'>
              <img src={commentIcon} alt="Comment" style={{fontWeight:"600"}}/>
              <p style={{fontFamily:"Open Sans",fontWeight:"semibold"}}>Comment</p>
            </div>
            <div className='like'>
              <img src={shareIcon} alt="Share" style={{fontWeight:"600"}}/>
              <p style={{fontFamily:"Open Sans",fontWeight:"semibold"}}>Share</p>
            </div>
            <div className='like'>
              <img src={saveIcon} alt="Save" style={{fontWeight:"600"}}/>
              <p style={{fontFamily:"Open Sans",fontWeight:"semibold"}}>Save</p>
            </div>
          </div>
        </Card>
      ))}
    <CreatePost/>
    </div>
  );
};

export default NewsFeed;
