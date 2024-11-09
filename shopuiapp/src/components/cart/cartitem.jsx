import React, { useContext } from 'react'
import './cartitem.css'
//import { CartContext } from '../../context/CartContext';
import RemoveFromCartIcon from '../../assets/page/cart/removefromcart_icon0.png'

const CartItem = () => {
//const { cart,removeFromCart,increaseQuantity,decreaseQuantity } = useContext(CartContext);

  return (
    <div className='cartitems'>
      <p>From Cart Item page</p>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      <div className="cartitems-format">
            <img alt='item image' src='' className='cartitems-productimg'/>
            <p>ProductName</p>
            <p>price</p>
            <div>
                <button className='cartitem-quantity'>-</button>
                <span>Quantity</span>
                <button className='cartitem-quantity'>+</button>
            </div>            
            <p>$Total</p>
            <img alt='remove' src={RemoveFromCartIcon} className='cartitems-removeimg'/>
      </div>
      { /*
        cart.map((item,index)=>{            
            <div key={index} className="cartitems-format">
                <img alt='item image' src={item.img} className='cartitems-productimg'/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div>
                  <button className='cartitem-quantity' onClick={decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className='cartitem-quantity' onClick={increaseQuantity(item.id)}>+</button>
                </div> 
                <p>${item.price * item.quantity }</p>
                <img alt='remove' src={RemoveFromCartIcon} className='cartitems-removeimg' onClick={removeFromCart(item.id)}/>
            </div>             
         }
        )
         */
      }
      
      <div>
        
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Total</h1>
                <div>
                    <div className='cartitems-total-value'>
                        <p>SubTotal</p>
                        <p>${0}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-value'>
                        <p>Shipping Fee</p>
                        <p>free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-value'>
                       <h3>Total</h3>
                       <h3>${0}</h3>
                    </div>
                </div>                
                    <button>PROCEED TO CHECK OUT</button>                
            </div>
            <div className="cartitems-promocode">
                <h3>If you have promo code enter it here</h3>
                <div className="cartitems-promobox">
                    <input type='text' placeholder='Enter Promo Code..'/> 
                    <button>Submit</button>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
