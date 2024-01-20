import React from 'react'
import './NavBar.css'


const NavBar = () => {
  return (
    <div className='navBar'>
            <h1><span className='head'>Robo</span>trade</h1>
            <nav>
            <ul className='nav-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#market">Market</a></li>
                <li><a href="#feature">Feature</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar