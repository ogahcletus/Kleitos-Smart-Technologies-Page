import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";


const Login = () => {
  return (
    <div className='login'>
      <span className="login-title">Login</span>
     <form className="login-form">
       
       <label>Email</label>
       <input className='login-input' type='text' placeholder='Enter your email....'/>
       <label>Password</label>
       <input className='login-input' type='password' placeholder='Enter your password.....'/>
        <button className="login-button"><h3>LOGIN</h3></button>
        
     </form>
     <button className="login-button-register">
      <Link className='link'  to='/signup'><h3>SIGN-UP</h3></Link>
     </button>
     
    </div>
  )
}

export default Login