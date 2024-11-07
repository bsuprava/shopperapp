import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.category}/${props.id}`}>
        <img alt="" src={props.image} height="350px" width="200px"/>
      </Link>       
      <p>{props.name}</p>
      <div className='item-prices'>
        {props.price}
       </div>
    </div>
  )
}

export default Item
