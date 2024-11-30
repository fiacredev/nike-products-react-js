import React from 'react'
import Design from './Footer.css'

function Footer() {
  return (
    <div className='footer'>

        <div className='first'>
        <div className='nikeLogo'>
            <h4 className='check bi bi-patch-check'> nike</h4>
            <p className='text-7'>
                Get shoes ready for the new term at your <br />
                nearest nike store. find your perfect nike size in <br />
                store.get Rewards.
            </p>
            <ul className='Smedia'>
                <li className='bi bi-youtube'></li>
                <li className='bi bi-twitter'></li>
                <li className='bi bi-instagram'></li>
            </ul>
        </div>

        <div className='same-heading'>
            <h3 className='same-text'>products</h3>
            <ul>
                <li>air force 1</li>
                <li>air max 1</li>
                <li>air jordan 1</li>
                <li>air force 2</li>
                <li>nike waffle racer</li>
                <li>nike cortez</li>
            </ul>
        </div>

        <div className='same-heading'>
            <h3 className='same-text'>help</h3>
            <ul>
                <li>about us</li>
                <li>FAQs</li>
                <li>how it works</li>
                <li>privacy policy</li>
                <li>payment policy</li>
            </ul>
        </div>

        <div className='same-heading'>
            <h3 className='same-text'>get in touch</h3>
            <ul>
                <li>customer@nike.com</li>
                <li>+92554862354</li>
            </ul>
        </div>

        </div>

        <div className='second'>
            <ul>
                <li><h5>&copy; copyright. all rights reserved.</h5></li>
                <li><h5>terms & conditions.</h5></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer