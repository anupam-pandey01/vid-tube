import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import user_profile from '../../assets/jack.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-left flex-div">
        <img src={menu} alt="" className='icon'/>
        <img src={logo} alt="" className='logo'/>
      </div>

      <div className="navbar-middle flex-div">
        <div className="search-box flex-div">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt="" className='icon search-icon'/>
        </div>
      </div>

      <div className="navbar-right flex-div">
        <img src={upload_icon} alt="" className='icon'/>
        <img src={more_icon} alt="" className='icon'/>
        <img src={notification_icon} alt="" className='icon'/>
        <img src={user_profile} alt="" className='icon user-profile'/>
      </div>
    </nav>
  )
}

export default Navbar
