import React from 'react'
import '../menu/MenuHome.css'

function MenuHome({scrollToSection}) {
    return (
      <nav>
      <ul>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('contacts')}>Contacts</li>
      </ul>
    </nav>
    )
}
export default MenuHome