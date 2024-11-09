import React,{useContext} from 'react'
import './cartitem.css'
import { CartContext } from '../../context/CartContext';
import RemoveFromCartIcon from '../../assets/page/cart/removefromcart_icon1.png'

const CartItem = (props) => {
const { itemCount,increaseQuantity,decreaseQuantity,removeFromCart} = useContext(CartContext);
console.log('itemCount:'+itemCount);
console.log('itemName:'+props.name);

return(
  <div className="cartitems-format">
      <p><img alt='item image' src={props.img} className='cartitems-productimg'/></p>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <div className='cartitem-quantity'>
        <button > - </button>
        <span> {props.quantity} </span>
        <button > + </button>
      </div> 
      {/**
       * <div>
        <button className='cartitem-quantity' onClick={decreaseQuantity(props.id)}>-</button>
        <span>{props.quantity}</span>
        <button className='cartitem-quantity' onClick={increaseQuantity(props.id)}>+</button>
      </div> 
      <p> <img alt='remove' src={RemoveFromCartIcon} className='cartitems-removeimg' onClick={removeFromCart(props.id)}/></p>
       */}
      
      <p>${props.price * props.quantity }</p>
      <p> 
        <img alt='remove' title='Remove From Cart' src={RemoveFromCartIcon} className='cartitems-removeimg' onClick={()=> removeFromCart(props.id)}/>
      </p>
      
  </div>
);
  
}

export default CartItem
