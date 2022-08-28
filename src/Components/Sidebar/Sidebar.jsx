import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-items">
         <span className="sidebar-title1"><h4>ABOUT US</h4></span>
         <img  
            src='https://scontent.fabv2-2.fna.fbcdn.net/v/t1.18169-9/1378690_10151988934327628_1066645890_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGMernw_8nWlI4W70ZCNp4wuEtuIlvidiO4S24iW-J2I4xDbgVsYzLDA_cvVPhvU2tvZgGxRKCssLGZzKYhXFUd&_nc_ohc=ks2aJcDC2EYAX8a4IYa&_nc_ht=scontent.fabv2-2.fna&oh=00_AT8ynK36QthSk8qrGBMC_qWntM5ZhLfpe9HDw3OUUzdGAg&oe=632FEF18'
            alt=''
         />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae id provident doloribus minus quod delectus fuga! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptates modi quas!</p>
       </div>
       <div className="sidebar-items">
         <span className="sidebar-title1"><h4>CATEGORIES</h4></span>
         <div className="sidebarlist">
            <li className="sidebarlist-items">Software Development</li>
            <li className="sidebarlist-items">Data Analysis</li>
            <li className="sidebarlist-items">Project Management</li>
            <li className="sidebarlist-items">Engineering</li>
            
            <li className="sidebarlist-items">Solar Technologies</li>
            <li className="sidebarlist-items">Financial Technologies(FinTech)</li>
         </div>
    </div>
    <div className="sidebar-items">
        <span className="sidebar-title2"><h4>FOLLOW US</h4></span>
        <div className="sidebar-social">
        <i className="sidebar-Icons fa-brands fa-twitter" />
        <i className="sidebar-Icons fa-brands fa-facebook"/>
        <i className="sidebar-Icons fa-brands fa-instagram"/>
        <i className="sidebar-Icons fa-brands fa-linkedin" />
        </div>
    </div>
    </div>
  )
}

export default Sidebar
