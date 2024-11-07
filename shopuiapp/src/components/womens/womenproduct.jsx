import React, { useContext, useEffect } from 'react'
import './womenproduct.css'
import Item from '../../components/items/item'
import { ShopContext } from '../../context/ShopContext'
import {NavMenuContext} from '../../context/NavMenuContext'

const WomenProduct = () => {

  const {womenProducts} = useContext(ShopContext);
  const {setSelectedNavMenu} = useContext(NavMenuContext)

   useEffect(()=>{
    setSelectedNavMenu("women");
   },[setSelectedNavMenu]);

  return(
    <div className='women'>
      <h1>SHOP IN WOMEN</h1>
      <hr/>
      <div className="women-items">
        {womenProducts.map((item,i)=>{
                return <Item className='shopcategory-items' key={i} id={item.id} category="women" name={item.name} image={item.img} price={item.price}/>
              })
        }
      </div>
    </div>
  );
}
export default WomenProduct
