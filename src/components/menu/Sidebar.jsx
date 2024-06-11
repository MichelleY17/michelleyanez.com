import React from "react";
import { useTheme } from "../../common/ThemeContext";

import { Link } from "react-router-dom";
// import Pacman from '../../assets/pacman.png'
// import phantomIcon from '../../assets/phantom.png'
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import "../../components/menu/Menu.css";

function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <div className="sidebarContainer">
      <ul className="navContent">
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
        <li>
          <img
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          ></img>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
