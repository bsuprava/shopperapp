import React from 'react'
import './popular.css'
import product_data from '../../assets/page/productdata'
import Item from '../items/item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR PRODUCTS</h1>
        <hr/>
        <div className="popular-items">
            {product_data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
            }
            )}
        </div>
    </div>
  )
}

export default Popular
