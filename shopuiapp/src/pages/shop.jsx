import React from 'react'
import Hero from '../components/heros/hero'
import Popular from '../components/populars/popular'
import NewsLetter from '../components/newsletters/newsletter'
import Offer from '../components/offers/offer'
import WomenProduct from '../components/womens/womenproduct'

const Shop = () => {
  return (
    <div>      
      <Hero/>
      <Offer/>
      <Popular/>
      <WomenProduct/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
