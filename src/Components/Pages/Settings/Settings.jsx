import React from 'react';
import './settings.css';
import Sidebar from '../../Sidebar/Sidebar';

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settings-wrapper">
        <div className="settings-title">
            <span className="update-title"><h3>Update Account</h3></span>
            <span className="delete-title"><h3>Delete Account</h3></span>
        </div>
            <form className="settings">
               <label>Profile Picture</label>
                 <div className="settings-profile-img">
                    <img src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/278211684_10159922769962628_5084922974116813440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG9fMfQrQLvEEuhhzVggoB3FBFYrt5ElZAUEViu3kSVkJrRZt2syKL9nlZua8fHuldj_8BUHbwL713dg4Yexn3M&_nc_ohc=mAOMXTMfzsgAX9aOlvy&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AT_54mjiiv36uV2C64IQ-wlHWeG3jY5aKzqyQ05uVBlfhw&oe=6310AA8B" alt="" className="profile-img" />

                    <label htmlFor=''>
                    <i class="fa-solid fa-circle-user"></i>
                    </label>
                 </div>


            </form>
      </div>
      <Sidebar />
    
    </div>
  )
}

export default Settings