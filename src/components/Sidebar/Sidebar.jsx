import React from 'react';
import './Sidebar.css';
import home_icon from '../../assets/home.png';
import automobile_icon from '../../assets/automobiles.png';
import gaming from '../../assets/game_icon.png'
import sports from '../../assets/sports.png';
import tech from '../../assets/tech.png';
import entertainment from '../../assets/entertainment.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';


const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-link">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)} >
              <img src={home_icon} alt="" />
              <p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
              <img src={gaming} alt="" />
              <p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
              <img src={automobile_icon} alt="" />
              <p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
              <img src={sports} alt="" />
              <p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
              <img src={entertainment} alt="" />
              <p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
              <img src={tech} alt="" />
              <p>Technology</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
              <img src={music} alt="" />
              <p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
              <img src={blogs} alt="" />
              <p>Blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
              <img src={news} alt="" />
              <p>News</p>
            </div>
        </div>
        <hr />
        <div className="subscribe-link">
          <h3>SUBSCRIBED</h3>
          <div className="side-link">
            <img src={jack} alt="" />
            <p>PewDie</p>
          </div>
          <div className="side-link">
            <img src={simon} alt="" />
            <p>MrBeast</p>
          </div>
          <div className="side-link">
            <img src={tom} alt="" />
            <p>5-minute Crafts</p>
          </div>
          <div className="side-link">
            <img src={megan} alt="" />
            <p>Justin Bieber</p>
          </div>
          <div className="side-link">
            <img src={megan} alt="" />
            <p>Justin Bieber</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
