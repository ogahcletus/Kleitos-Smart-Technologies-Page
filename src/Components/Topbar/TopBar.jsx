import React from 'react';
import './topbar.css';


function TopBar() {
  return (
    <div className='top'>
    
    <div className="top-left">
    <i className="topIcons fa-brands fa-twitter" />
    <i className="topIcons fa-brands fa-facebook"/>
    <i className="topIcons fa-brands fa-instagram"/>
    <i className="topIcons fa-brands fa-linkedin" />
    </div>
    <div className="top-center">
    <ul className="toplist">
        <li className="toplistitem"><h2>HOME</h2></li>
        <li className="toplistitem"><h2>ABOUT</h2></li>
        <li className="toplistitem"><h2>CONTACT</h2></li>
        <li className="toplistitem"><h2>BLOG</h2></li>
        <li className="toplistitem"><h2>LOGOUT</h2></li>
        
    </ul>
    </div>
    <div className="top-right">
        <img 
        className='topImg'  
        src='https://lh3.googleusercontent.com/ogw/AOh-ky3s4XgXOcQ8vooMPUj_1bgg9sj40QxcFaMlBx1nUA=s64-c-mo' alt='Kleitos' />
        <i className= "topserchicon fa-brands fa-searchengin" />
    </div>
    </div>
  )
}

export default TopBar