import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router';

const Recommended = ({categoryId}) => {
    const [apiData, setApiData] = useState([]);

    // Fectching the video for recommended section
    const fetchData = async()=>{
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(url) .then(res=>res.json()).then(data=>setApiData(data.items))
    }

    // call the fetch function
    useEffect(()=>{
        fetchData();
    }, [categoryId])

    return (
        <div className='recommended'>
            {apiData.map((item, index)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended
