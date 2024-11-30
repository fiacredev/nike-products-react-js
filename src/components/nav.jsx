import logo from '../images/look/e.jpg'
import nav from './nav.css'
import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <img src={logo} alt="this is nike logo" />  
        <ul>
            <li>home</li>
            <li>about us</li>
            <li>contact</li>
            <li>services</li>
        </ul>
    </div>
  )
}

export default Nav