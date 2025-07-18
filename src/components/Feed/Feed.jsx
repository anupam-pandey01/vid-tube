import React from 'react'
import './Feed.css';
import { Link } from "react-router"
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Feed = () => {
  return (
    <div className='feed'>
      <Link to={`/video/${45}/${456}`} className="feed-video">
        <img src={thumbnail1} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </Link >
      <div className="feed-video">
        <img src={thumbnail2} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail3} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail4} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail5} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail6} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail1} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail8} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail1} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail2} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail3} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail4} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail5} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail6} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail1} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
      <div className="feed-video">
        <img src={thumbnail8} alt="" />
        <h2>Simple Things That Make a Big Difference</h2>
        <h3>Anupam Pandey</h3>
        <p>230k &bull; views 2 days ago</p>
      </div>
    </div>
  )
}

export default Feed
