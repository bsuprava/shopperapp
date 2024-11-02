import React from 'react'
import './menproduct.css'
import men_products from '../../assets/page/menproducts'
import Item from '../items/item'

const MenProduct = () => {
    return (
        <div className='men'>
            <h1>SHOP IN MEN</h1>
            <hr/>
            <div className="men-items">
                {men_products.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
                }
                )}
            </div>
        </div>
      )
}

export default MenProduct
