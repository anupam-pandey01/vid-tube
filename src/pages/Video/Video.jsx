import React from 'react';
import './Video.css';
import Player from '../../components/Player/Player';
import Recommended from '../../components/Recommended/Recommended';

const Video = () => {
  return (
    <div className='play-container'>
      <Player/>
      <Recommended/>
    </div>
  )
}

export default Video
