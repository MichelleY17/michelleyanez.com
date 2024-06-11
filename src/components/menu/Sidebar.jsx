import React from 'react'
import '../../components/menu/Menu.css' 
import { Link } from 'react-router-dom'
// import Pacman from '../../assets/pacman.png'
// import phantomIcon from '../../assets/phantom.png'


function Sidebar() {
    // const phantom = theme === 'light'? sun : moon;
    return(
       <div className='sidebarContainer'>
            <ul className='navContent'>
                <li  className='navItem'><Link className='navLink' to='/home'>Home</Link></li>
                <li  className='navItem'><Link className='navLink'to='/about'>About</Link></li>
                <li  className='navItem'><Link className='navLink' to='/projects'>Projects</Link></li>
                <li  className='navItem'><Link  className='navLink'to='/getintouch'>Get in Touch</Link></li>
               
            </ul>
       </div>
    )
}

export default Sidebar
