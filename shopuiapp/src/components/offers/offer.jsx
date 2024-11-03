import React from 'react'
import './offer.css'
import ExclusiveImg from '../../assets/page/shopbanner2.jpg'

const Offer = () => {
  return (
    <div className='offer'>
        <div className='offer-left'>
            <h1>EXCLUSIVE OFFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offer-right'>
            <img alt='' src={ExclusiveImg} width='100%'/>
        </div>      
    </div>
  )
}

export default Offer
