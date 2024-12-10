import Hero from '../components/heros/hero'
import Popular from '../components/populars/popular'
import NewsLetter from '../components/newsletters/newsletter'
import Offer from '../components/offers/offer'
import ProductApis from '../components/apicalls/ProductApis'

const Shop = () => {
 
  return (
    <div>      
      <Hero/>
      <Offer/>
      <Popular/>
      {/*   <ProductApis></ProductApis>  */}  
      <NewsLetter/>
    </div>
  )
}

export default Shop
