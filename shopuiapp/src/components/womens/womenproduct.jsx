import React, { useContext } from 'react'
import './womenproduct.css'
import Item from '../../components/items/item'
import { ShopContext } from '../../context/ShopContext'

const WomenProduct = () => {

  const {womenProducts} = useContext(ShopContext);

  return(
    <div className='women'>
      <h1>SHOP IN WOMEN</h1>
      <hr/>
      <div className="women-items">
        {womenProducts.map((item,i)=>{
                return <Item className='shopcategory-items' key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
              })
        }
      </div>
    </div>
  );
}
export default WomenProduct
