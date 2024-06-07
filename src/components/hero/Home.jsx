import React from 'react'
import  styles from './HomeStyles.module.css'
import heroImg from '../../assets/hero-img.png'

function Home() {
  return (
    <section id="home">
        <div>
          <img src={heroImg} alt="" />
        </div>
    </section>
  )
}

export default Home
// rfce snip