import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/items/item';
import './CSS/shopcategory.css'

const ShopCategory = (props) => {
const {womenProducts,kidsProducts} = useContext(ShopContext);

const renderProductsByCategory = () => {
  switch (props.category) {
    case 'women':
      return <div className='subcategory-products'><h1>SHOP IN WOMEN</h1>
            <hr/><div className="shopcategory-items">{womenProducts.map((item,i)=>{
        return <Item className='shopcategory-items' key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
        })}</div></div>;
      break;
    case 'kids':
      return <div className='subcategory-products'><h1>SHOP IN KIDS</h1>
            <hr/><div className="shopcategory-items">{kidsProducts.map((item,i)=>{
        return <Item className='shopcategory-items' key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
        })}</div></div>;
      break;
    default:
      return <div></div>;
  }
}

  return (
    <div className='shopcategory'>      
      <img alt='' src={props.banner}/>             
      {renderProductsByCategory()}      
    </div>
  )
}

export default ShopCategory
