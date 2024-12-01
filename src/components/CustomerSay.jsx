// we first import react from react
import React from 'react'
import Design from './CustomerSay.css'
import a from '../images/look/per01.jpg'
import b from '../images/look/per02.jpg'
import bootstrap from '../../src/Bootstrap icon/icons/bootstrap-icons.css'

function CustomerSay() {
  return (
    <div className='CustomerSay'>
        <div className='say'>
            <h4 className='text-1'>what our <span>custmer</span> Say ?</h4>
            <p className='text-2'>hear genuine stories from our satisfied customers about <br />
            their expectation experience with us.</p>
            <div className='sayBox'>
                <div className='box'>
                    <img src={a} alt="testimonial" />
                    <p className='text-3'>the attention to deal and quality of <br />
                    the product  exceed my expectation my expectations <br />
                    highly recommended.</p>
                    <h4 className='bi bi-star-fill'><span> (4.5)</span></h4>
                    <h4 className='text-4'>Morich Brown.</h4>
                </div>
                <div className='box'>
                    <img src={b} alt="testimonial" />
                    <p className='text-3'>the attention to deal and quality of <br />
                    the product  exceed my expectation my expectations <br />
                    highly recommended.</p>
                    <h4 className='bi bi-star-fill'><span> (4.5)</span></h4>
                    <h4 className='text-4'>Morich Brown.</h4>
                </div>
            </div>
        </div>
        <div className='sign'>
                <h4 className='text-5'>sign up from <br />new <span>updates</span> & <br />
                newslatter.</h4>
                <div className='signUp'>
                    <input type="text" placeholder='subscribe@nike.com.' />
                    <button className='button'>sign up</button>
                </div>
            </div>
    </div>
  )
}

export default CustomerSay