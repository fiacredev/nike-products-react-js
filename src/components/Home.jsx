import React, { useState } from 'react'
import mainShoe from '../images/look/a.jpg'
import Design from './Home.css'
import a from '../images/look/capt.jpg'
import b from '../images/look/eleven.jpeg'
import c from '../images/look/fosi.jpg'

function Home() {

    const [changeA,setChangeA] = useState(mainShoe);

    function changeFirst(){
        const wideImage = document.getElementById("bigImg");
        wideImage.src = a;  
    }

    function changeSecond(){
        const wideImage = document.getElementById("bigImg");
        wideImage.src = b;
    }

    function changeThird(){
        const wideImage = document.getElementById("bigImg");
        wideImage.src = c;
    }


  return (
    <div className='home'>

        <div className='cont-1'>
        <h5 className='text-1'>our summer collections.</h5>
        <h3 className='text-2'>the new arrival <br /> <span>nike</span> shoes.</h3>
        <h5 className='text-3'>Discover stylish nike arrivals quality <br />
        comfort and innovation for your active life.</h5>
        
        <button className='shop-but'>shop now</button>
        
        <div className='main-bold'>
        <div className='bold'>
            <h4>1K+<p className='hsix'>brands</p></h4>
        </div>
        <div className='bold'>
            <h4>500K+<p className='hsix'>shops</p></h4>
        </div>
        <div className='bold'>
            <h4>250K+<p className='hsix'>customers</p></h4>
        </div>
        </div>

    </div>

    <div className='cont-2'>
        <img src={changeA} className='ref' alt="shoe reference" id='bigImg'/>
        <div className='cont2-img'>
            <img src={a} alt="img1" onClick={()=>changeFirst()}/>
            <img src={b} alt="img2" onClick={()=>changeSecond()}/>
            <img src={c} alt="img3" onClick={()=>changeThird()}/>
        </div>
    </div>
    </div>
  )
}

export default Home