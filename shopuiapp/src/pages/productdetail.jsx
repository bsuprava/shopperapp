import React, { useContext, useEffect } from 'react'
import {ShopContext} from '../context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/breadcrum/breadcrum.jsx'
import men_products from '../assets/page/menproducts.js'
import {NavMenuContext} from '../context/NavMenuContext.jsx'
import ProductDisplay from '../components/product/productdisplay.jsx'

const ProductDetail = (props) => {
    const {womenProducts,kidsProducts} =useContext(ShopContext);
    const {setSelectedNavMenu} = useContext(NavMenuContext);
    const {productCategory,productId} = useParams();

    useEffect(()=>{
        setSelectedNavMenu(productCategory);
       },[setSelectedNavMenu]);

    const getProductsByCategory = () => {
        switch (productCategory) {
            case 'men': return men_products.find((p)=> p.id === Number(productId));break;
            case 'women': return womenProducts.find((p)=> p.id === Number(productId)); break;
            case 'kids': return kidsProducts.find((p)=> p.id === Number(productId)); break;
        };
    }; 

    let productData = getProductsByCategory();

  return (
    <div>
      <Breadcrum products= {productData} category={productCategory}/>
      <div>
            <ProductDisplay products= {productData}></ProductDisplay>
      </div>
      
    </div>
  )
}

export default ProductDetail
