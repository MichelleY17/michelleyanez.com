import { useState } from 'react'
import './App.css'
import Sidebar from './components/menu/Sidebar'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Projects from './components/pages/projects/Projects'
import GetInTouch from './components/pages/getInTouch/GetInTouch'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
  
      <div className='appContainer'>
      <Sidebar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/getintouch' element={<GetInTouch />} />
      </Routes>



      </div>

   
  )
}

export default App
