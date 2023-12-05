import React from 'react'
import {AiOutlineStock } from 'react-icons/ai'
import './NavBar.css'


const NavBar = () => {
  return (
    <div>
        <div className='navBar'>
            <AiOutlineStock  className='icon' />
            <h1> Trading <span className='blue'>Bot</span></h1>
        </div>
    </div>
  )
}

export default NavBar