// this side about to deal with special offers on our pages
import React from 'react'
import Design from'./SpecialOffers.css'
import bootstrap from '../Bootstrap icon/icons/bootstrap-icons.css'
import a from '../images/look/capt.jpg'
import b from '../images/look/jay4.jpg'
import c from'../images/look/fosi.jpg'

function specialOffer() {
  return (
 <div>
    <div className='cards'>
        <div className='card'>
            <h4 className='bi bi-calendar4-range'></h4>
            <h4 className='text-2'>free shipping</h4>
            <p className='text-3'>enjoy seemless shoipping with our <br />
            complimentary shipping service.</p>
        </div>
        <div className='card'>
            <h4 className='bi bi-inbox'></h4>
            <h4 className='text-2'>secure payment</h4>
            <p className='text-3'>enjoy seemless shoipping with our <br />
            complimentary shipping service.</p>
        </div>
        <div className='card'>
            <h4 className='bi bi-bag-plus'></h4>
            <h4 className='text-2'>love to help</h4>
            <p className='text-3'>enjoy seemless shoipping with our <br />
            complimentary shipping service.</p>
        </div>
    </div>
    <div className='specialOffers'>
      
    <div className='picBox'>

      <div className='images'>
      <div className='first'>
        <img src={b} alt="" className='firstC'/>
        <img src={c} alt="" className='firstC' style={{borderBottomRightRadius:'80px'}}/>
      </div>
      <div className='second'>
        <img src={a} alt="" className='secondC' style={{borderTopRightRadius:'80px'}}/>
      </div>
      </div>
      
      <div className='discount'>
        <h3>30%</h3>
        <p className='text-1'>off</p>
      </div>

    </div>

    <div className='offers'>
    <h4 className='text-1'><span>special</span> offers.</h4>
        <p className='parag-1'>
          Lorem ipsum dolor sit amet consectetur as we decided type shii <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing <br />
          Lorem ipsum dolor sit amet consectetur wob on the streets<br />
          Lorem ipsum dolor, sit amet consectetur. <br /><br />

          tou noo as streets like to recognize <br />
          Lorem ipsum dolor sit amet consectetur as usualto night <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing adipisicing.<br />
        </p>
      <div className='buttons'>
       <button>view details</button>    
       <button>learn more</button>
      </div>
    </div>

    </div>

 </div>
  )
}

export default specialOffer