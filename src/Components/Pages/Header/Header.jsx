import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-titles">
       <span className="header-title1">
         <h1>KLEITOS SMART TECHNOLOGIES</h1>
       </span>
       <img className='header-image'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWnPUyBmyhxehPqSX12Oibz24sZ31koJV65m_FAWyfkEF9DhwP0CQsqvuOWCc5oyZ1Es&usqp=CAU'
        alt=''
       />
      </div>
    </div>
  )
}

export default Header
