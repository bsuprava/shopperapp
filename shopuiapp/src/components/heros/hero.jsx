import React from 'react'
import './hero.css'
//import HandIcon from '../../assets/page/handicon.png'
import HiIcon from '../../assets/page/hiicon.png'
import HaveAlookArrow from '../../assets/page/havealookarrow.png'
//import ShopBanner1 from '../../assets/page/shopbanner1.jpg'
//import ShopBanner2 from '../../assets/page/shopbanner2.jpg'
import ShopBanner7 from '../../assets/page/shopbanner7.jpg'


const Hero = () => {
  return (
    
        <div className='hero-img-container'>
            <img alt="shop" src={ShopBanner7} width="100%" height="350px"/>
            <div className='hero-img-text-overlay'>
                <div className='hero-img-text-display'>
                    <p>NEW</p>
                    <p>Collections</p>
                    <p>For EveryOne</p>
                </div>
                <div className='hero-img-text-arrow'>
                <div>Latest Collection</div>
                <img src={HaveAlookArrow} alt="Latest Collection" height="30px" width="30px"/>
            </div>
                
            </div>
            
        </div>         
    
  )
}

export default Hero
