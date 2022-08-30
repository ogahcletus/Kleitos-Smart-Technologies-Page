import React from 'react';
import { Link } from 'react-router-dom';
import './settings.css';
import Sidebar from '../../Sidebar/Sidebar';

const Settings = () => {
  const user = true;
  
  return (
    <div className='settings'>
      <div className="settings-wrapper">
        <div className="settings-title">
            <span className="update-title"><h3>Update Account</h3></span>
            <span className="delete-title"><h3>Delete Account</h3></span>
        </div>

        { user?
            <form className="settings-form">
               <label>Profile Picture</label>
                 <div className="settings-profile-img">
                    <img src="https://scontent.fabv2-1.fna.fbcdn.net/v/t1.6435-9/149790606_10159071750157628_7974428388512127847_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8Jscb7_wuyL5vJ1_p15tK8CvBhdV3AabwK8GF1XcBpoo0MPHPC4uUus99OYvhKaW0OGup4A0lKNMMPt5_wmVs&_nc_ohc=lh2DrrED6TEAX9ef9ah&_nc_ht=scontent.fabv2-1.fna&oh=00_AT8G-NdLIEYjSFWrgm9FSJNR2CX6BRTp9DaAda67dSBz-g&oe=63301ECD" alt=""/>

                    <label htmlFor='file-input'>
                    <i className="profile-imgIcon fa-solid fa-user-plus"></i>
                    </label>
                    <input type='file' id='file-input' style={{display:'none'}}/>
                </div>
                 
                  <label><h3>UserName</h3></label>
                  <input type='text' placeholder='Enter your username here...' />
                  <label><h3>Email</h3></label>
                  <input type='email' placeholder='Enter your email ....' />
                  <label><h3>Password</h3></label>
                  <input type='password' placeholder='Enter your password here...'  />
                  
                  <button className="settingsSubmit"><h3>Update</h3></button>
                 
                  
            </form>
             
             : <li className='toplistitem'>
              <Link to='/signup'>SIGNUP</Link>
             </li>
            }
            
      </div>
      <Sidebar />
    
    </div>
  )
}

export default Settings