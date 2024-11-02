import React from 'react'
import './item.css'

const Item = (props) => {
  return (
    <div className='item'>
       <img alt="" src={props.image} height="350px" width="200px"/>
       <p>{props.name}</p>
       <div className='item-prices'>
            {props.price}
       </div>
    </div>
  )
}

export default Item
