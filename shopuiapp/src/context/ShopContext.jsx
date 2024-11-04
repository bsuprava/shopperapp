import React, { createContext } from 'react'
import WomenProducts from '../assets/page/womenproducts.js'
import KidsProducts from '../assets/page/kidsproducts.js'

export const  ShopContext = createContext(null);
const ShopContextProvider = (props) => {
    const womenProducts = WomenProducts;
    const kidsProducts = KidsProducts;
  return (
    <ShopContext.Provider value={{womenProducts,kidsProducts}}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
