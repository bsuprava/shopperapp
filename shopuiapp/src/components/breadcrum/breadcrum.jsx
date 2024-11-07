import React from 'react'
import './breadcrum.css'
import BreadcrumArrowIcon from '../../assets/page/breadcrumarrowicon.png'

const Breadcrum = (props) => {
    const {category,products} = props;

  return (
    <div className='breadcrum-container'>
     <span>Home</span>  <img alt='' src={BreadcrumArrowIcon} width='20px' height='20px'/>
     <span>Shop</span>  <img alt='' src={BreadcrumArrowIcon} width='20px' height='20px'/>
     <span>{category}</span>  <img alt='' src={BreadcrumArrowIcon} width='20px' height='20px'/>
     <span>{products.name}</span>  <img alt='' src={BreadcrumArrowIcon} width='20px' height='20px'/>
    </div>    
  )
}

export default Breadcrum
