import React,{useContext, useEffect, useMemo} from 'react'
import './CSS/cart.css'
import CartItem from '../components/cart/cartitem'
import {NavMenuContext} from '../context/NavMenuContext'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const {setSelectedNavMenu} = useContext(NavMenuContext);
  const { cart } = useContext(CartContext);
  console.log("cartitemlength:"+cart.length);

  useEffect(()=>{
    setSelectedNavMenu("home") 
  },[setSelectedNavMenu]);

  // Calculate subtotal using useMemo to avoid recalculating on every render 
  const subtotal = useMemo(() => { return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0); }, [cart]);

  const renderCartItems = () =>{
    if(cart.length > 0)
    {
      return cart.map((item,i)=>{
        return <CartItem key={i} id={item.id} name={item.name} img={item.img} price={item.price} quantity={item.quantity}/>
      })
    }
    else
    {
      return <h2>Cart is Empty!</h2>
    }    
  };

  return (
    <div className='cartitems'>      
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <div>Quantity</div> 
        <p>Total</p>  
        <p>Remove</p>     
      </div>
      <hr/>  
      <div>
        {renderCartItems()}
      </div>    
      
      <div>
        
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Total</h1>
                <div>
                    <div className='cartitems-total-value'>
                        <p>SubTotal</p>
                        <p>${subtotal}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-value'>
                        <p>Shipping Fee</p>
                        <p>free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-value'>
                       <h3>Total</h3>
                       <h3>${subtotal}</h3>
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

export default Cart
