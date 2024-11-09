import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import NavMenuContextProvider from './context/NavMenuContext.jsx'
import CartContextProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavMenuContextProvider>
      <ShopContextProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider> 
      </ShopContextProvider> 
    </NavMenuContextProvider>       
  </StrictMode>,
)
