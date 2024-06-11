import React from "react";
import { Link } from "react-router-dom";
// import Pacman from '../../assets/pacman.png'
// import phantomIcon from '../../assets/phantom.png'
import "../../components/menu/Menu.css";
import ThemeIcon from "../icons/ThemeIcon";

function Sidebar() {

  return (
    <div className="sidebarContainer">
      <ul className="navContent">
    
         <ThemeIcon  className="themeIcon"/>
        
        <li className="navItem">
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/projects">
            Projects
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/getintouch">
            Get in Touch
          </Link>
        </li>
      
      </ul>
    </div>
  );
}

export default Sidebar;
