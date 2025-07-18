import React from 'react';
import "./Player.css";
import video from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg'

const Player = () => {
  return (
    <div className='play-video'>
      <video src={video} controls autoPlay muted></video>
      <h3>Simple Things That Make a Big Difference</h3>
      <div className='play-video-info'>
        <p>1543 views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="" />1254</span>
          <span><img src={dislike} alt="" />2</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Anupam Pandey</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that make the life eaiser</p>
        <p>Subscribe the Anupam pandey to make your life eaiser because he make very informative video</p>
        <hr />
        <h4>340 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholsan <span>2 days ago</span></h3>
            <p> This was super helpful! I always hated writing those long import lines. The index.js trick is a game-changer. Thanks, bro! </p>
            <div className='comment-action'>
              <img src={like} alt="" /><span>135</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholsan <span>2 days ago</span></h3>
            <p> This was super helpful! I always hated writing those long import lines. The index.js trick is a game-changer. Thanks, bro! </p>
            <div className='comment-action'>
              <img src={like} alt="" /><span>135</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholsan <span>2 days ago</span></h3>
            <p> This was super helpful! I always hated writing those long import lines. The index.js trick is a game-changer. Thanks, bro! </p>
            <div className='comment-action'>
              <img src={like} alt="" /><span>135</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholsan <span>2 days ago</span></h3>
            <p> This was super helpful! I always hated writing those long import lines. The index.js trick is a game-changer. Thanks, bro! </p>
            <div className='comment-action'>
              <img src={like} alt="" /><span>135</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
