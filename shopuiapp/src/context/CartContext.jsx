import React, { createContext, useState, useMemo } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    //create cart collection in state 
    const [cart, setCart]= useState([]);
    //const [cartItemCount, setcartItemCount]= useState(0);

    const itemCount = useMemo(() => { 
        return cart.reduce((total, item) => total + item.quantity, 0); 
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map(item => 
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map(item => 
                item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
            )
        );
    };


  return (
    <CartContext.Provider value={{cart,itemCount,setCart,addToCart,removeFromCart,increaseQuantity,decreaseQuantity}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider
