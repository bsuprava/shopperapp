import React,{useContext} from 'react'
import './CSS/shopcategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/items/item';
import MenProduct from '../components/mens/menproduct';
import WomenProduct from '../components/womens/womenproduct';

const ShopCategory = (props) => {

const {kidsProducts} = useContext(ShopContext);

const renderProductsByCategory = () => {
  switch (props.category) {
    case 'men':        
        return <div><MenProduct/></div>
    case 'women':
      return <div><WomenProduct/></div>;
    case 'kids':
      return <div className='subcategory-products'><h1>SHOP IN KIDS</h1>
            <hr/><div className="shopcategory-items">{kidsProducts.map((item,i)=>{
        return <Item className='shopcategory-items' key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
        })}</div></div>;
    default:
      return <div></div>;
      
  }
}

  return (
    <div className='shopcategory'>      
      <img alt='' src={props.banner} width='100%' height='300px'/>             
      {renderProductsByCategory()}      
    </div>
  )
}

export default ShopCategory
