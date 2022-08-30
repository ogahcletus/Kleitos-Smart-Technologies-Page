import React from 'react';
import { Link } from 'react-router-dom';
import "./signup.css";


const signup = () => {
  return (
    <div className='signup'>
      <span className="signup-title">Sign-Up!</span>
     <form className="signup-form">
     <label>UserName</label>
       <input className='signup-input' type='text' placeholder='Enter your username....'/>
       <label>Email</label>
       <input className='signup-input' type='text' placeholder='Enter your email....'/>
       <label>Password</label>
       <input className='signup-input' type='password' placeholder='Enter your password.....'/>
        <button className="signup-button"><h3>SIGN-UP</h3></button>
        
     </form>
     
     <button className="login-button">
     <Link className='link' to='/login'><h3>LOGIN</h3></Link>
     </button>
    </div>
  )
}

export default signup;