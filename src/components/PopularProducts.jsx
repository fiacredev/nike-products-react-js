import React from 'react'
import design from './PopularProducts.css'
import one from '../images/look/one.jpg'
import bootstrap from '../../src/Bootstrap icon/icons/bootstrap-icons.css'
import a from '../images/look/a.jpg'
import b from '../images/look/c.jpg'
import c from '../images/look/d.jpg'

function PopularProducts() {
  return (
    <div className='popProd'>
        <h3 className='text-1'>our popular <span>products</span>.</h3>
        <h5 className='text-2'>experience top notch quality and style with our sought after <br />
        selections discover aworld of comfort design and value.</h5>
        <div className='img-cont'>

            <div className='cont'>
            <img src={a} alt="" />
            <p className='text-1 bi bi-star-fill'> <span>(4.68)</span></p>
            <p className='text-2'>nike air jordan 01</p>
            <p className='text-3'>$2344</p>
            </div>

            <div className='cont'>
            <img src={b} alt="" />
            <p className='text-1 bi bi-star-fill'> <span>(4.68)</span></p>
            <p className='text-2'>nike air jordan 01</p>
            <p className='text-3'>$2344</p>
            </div>

            <div className='cont'>
            <img src={c} alt="" />
            <p className='text-1 bi bi-star-fill'> <span>(4.68)</span></p>
            <p className='text-2'>nike air jordan 01</p>
            <p className='text-3'>$2344</p>
            </div>

            <div className='cont'>
            <img src={a} alt="" />
            <p className='text-1 bi bi-star-fill'> <span>(4.68)</span></p>
            <p className='text-2'>nike air jordan 01</p>
            <p className='text-3'>$2344</p>
            </div>
            
        </div>

        <div className='superQuality'>
            <div className='cont'>
            <h3 className='text-1'>we provide you <span>super <br />quality</span> shoes.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur <br />
            adipisicing elit. Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Lorem ipsum dolor <br />
            sit amet consectetur adipisicing elit. <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing. <br />
            consectetur
            </p>
            <button className='but'>shop now</button>
            </div>
            <img src={one} alt="" />
        </div>
    </div>
  )
}

export default PopularProducts