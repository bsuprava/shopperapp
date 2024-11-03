import React from 'react'
import Hero from '../components/heros/hero'
import Popular from '../components/populars/popular'
import NewsLetter from '../components/newsletters/newsletter'
import Offer from '../components/offers/offer'
const Shop = () => {
  return (
    <div>      
      <Hero/>
      <Offer/>
      <Popular/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
