import React from 'react';
import { useState } from "react";
import './TopBar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';



export default function TopBar() {

const [action, setAction] = useState("Log In");



  return (
  
  <>
    <div className="topbar-container">
        <div className="topbar-left">
          <span className="logo">FriendsHome</span>
        </div>
        <div className="topbar-center">

        {action==="LogIn"?<div></div>:<div className="searchbar">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search FriendsHome" className="search-input" />
          </div>}


        </div>
        <div className="topbar-right">
          <div className="topbar-links">
            <nav>
            <ul>
              <li>
              <Link to="/home">Home</Link>
              </li>
           <li>
           <Link to="/login">Login</Link>
           </li>
            
            </ul>

            </nav>
            
          </div>
          <div className="topbar-icons">
       
            <div className="topbar-icon">
              <PersonIcon />
              <span className="icon-bar">
                1
              </span>
            </div>
            <div className="topbar-icon">
              <ChatIcon />
              <span className="icon-bar">
                5
              </span>
  </div>
            <div className="topbar-icon">
              <CircleNotificationsIcon />
              <span className="icon-bar">
                9
              </span>
            </div>
          </div>
          <img src={require("../../assets/person/person3.jpeg")} alt="profile image"  className="topbar-img" />
        </div>
    </div>



    </>
  );
};




function CustomerLink({ to, ...props }) {
  const path = window.location.pathname;

  return (
      <li className={path === to ? 'active' : ''}>
          <Link to={to} {...props}></Link>
      </li>
  );
}