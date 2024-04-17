import React, { useEffect, useState } from "react";
import "./HeaderStyles.css"
import { useNavigate,Link,NavLink } from "react-router-dom";
function Header() {

  const Navigate = useNavigate()

  return (
    <div className="myhead">
        <div className="main-content">
        <div className="header-content">
          <div className="about">
            <span>Admin</span>
            <h2 >DASHBOARD</h2>
          </div>

          <h1>AUGUSTA INSTITUTE OF AVIATION</h1>
          <img src="https://augustaaviations.netlify.app/assets/logo-COdVf4q9.png" alt="" style={{width:'5rem'}}/>
        </div>
      </div>
      <div className="side-bar">
        <div className="nav-heading">
          <h2>AUGUSTA AVIATIONS</h2>
          <h2 style={{marginTop:'-1rem'}}>Institute of Aviation</h2>
        </div>
        <div className="list-contents">
          <ul className="contents">
            <li>
            <NavLink to="/" className="a">
                <i className="fa fa-home"></i>
                <span>HomePage</span>
              </NavLink>
            </li>

           <li>
           <NavLink to="/students" className="a" >
                <i className="fa fa-address-card"></i>
                <span>Students</span>
              </NavLink>
            </li>
            <li>
            <NavLink to="/datasheet" className="a" >
                <i className="fa fa-address-card"></i>
                <span>CoursesDataSheet</span>
              </NavLink>
            </li>
            <li>
            <NavLink to="/contactus" className="a" >
                <i className="fa fa-address-card"></i>
                <span>Contact Us Sheet</span>
              </NavLink>
              
            </li>
 
            <li>
            <Link to="https://augustaaviations.netlify.app/#/admission" className="a" target="_blank" >
                <i className="fa fa-address-card"></i>
                <span>Online Application</span>
              </Link>
              
            </li>
          
{/* 
            <li>
              <a href="admin_users.php">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>Admin-Users</span>
              </a>
            </li>

            <li>
              <a href="logout.php">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <span>Logout</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
     
    </div>
  );
}

export default Header;
