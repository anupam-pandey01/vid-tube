import React from 'react';
import './Video.css';
import Player from '../../components/Player/Player';
import Recommended from '../../components/Recommended/Recommended';
import { useParams } from 'react-router';

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className='play-container'>
      <Player videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
