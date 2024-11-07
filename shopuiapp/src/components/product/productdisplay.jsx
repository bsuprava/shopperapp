import React from 'react'
import './productdisplay.css'
import BlackStar from '../../assets/page/product/blackstar.png'
import YellowStar from '../../assets/page/product/yellowstar.png'

const ProductDisplay = (props) => {
    const {products} = props;

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
         <div className="productdisplay-img-list">
            <img alt='' src={products.img} width='80px' height='80px' />
            <img alt='' src={products.img} width='80px' height='80px' />
            <img alt='' src={products.img} width='80px' height='80px' />
            <img alt='' src={products.img} width='80px' height='80px' />
            <img alt='' src={products.img} width='80px' height='80px' />
         </div>
         <div className="productdisplay-img">
            <img className="productdisplay-img-main" alt='' src={products.img} width='400px' height='400px' />
         </div>      
      </div>
      <div className='productdisplay-right'>
          <h1>{products.name}</h1>
          <div className="productdisplay-right-star">
            <img alt='' src={YellowStar} />
            <img alt='' src={YellowStar} />
            <img alt='' src={YellowStar} />
            <img alt='' src={BlackStar} />
            <img alt='' src={BlackStar} />
            <p>122</p>{/**no of ratings here */}
          </div>
          <div className="productdisplay-right-price">
            <div className="productdisplay-price">
              <span>$2500</span>${products.price}
            </div>            
          </div>
          <div className="productdisplay-right-desc">
             <p>
                This garment is an elegant product with recyclable and long-lasting material
            </p>            
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay
