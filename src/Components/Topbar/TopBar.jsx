import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';


function Topbar() {
  const user = false;
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
    
        <li className="toplistitem">
        <Link className='link' to="/"><h2>HOME</h2></Link>
        </li>
        <li className="toplistitem">
        <Link className='link' to="/"><h2>ABOUT</h2></Link>
        </li>
        <li className="toplistitem">
        <Link className='link' to="/"><h2>CONTACT</h2></Link>
        </li>
        <li className="toplistitem">
        <Link className='link' to="/"><h2>BLOG</h2></Link>
        </li>
        <li className="toplistitem">
         { user && <Link className='link' to="/"><h2>LOGOUT</h2></Link>}
        </li>
        
    </ul>
    </div>
    <div className="top-right">
          {
            user? (
        <img 
        className='topImg'  
        src='https://lh3.googleusercontent.com/ogw/AOh-ky3s4XgXOcQ8vooMPUj_1bgg9sj40QxcFaMlBx1nUA=s64-c-mo' alt='Kleitos' />  )

         : (
             
             <ul className='toplist'>
             <li className='toplistitem'>
              <Link to='/login'><h3>LOGIN</h3></Link>
             </li>
             <li className='toplistitem'>
              <Link to='/signup'><h3>SIGN-UP</h3></Link>
             </li>



             </ul>
             
              
         
       )}

        <i className= "topserchicon fa-brands fa-searchengin" />
    </div>
    </div>
  )
}

export default Topbar