import Navbar from './components/header/navbars/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop'
import ShopCategory from './pages/shopcategory'
import Products from './pages/products'
import Cart from './pages/cart'
import Login from './pages/login'

function App() {

  return (
    <div>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/men' element={<ShopCategory category="men"/>}></Route>
          <Route path='/women' element={<ShopCategory category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
          <Route path='/product' element={<Products/>}>
              <Route path=':productId' element={<Products/>}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
       </BrowserRouter>   
      
      <h1>Welcome to first e-commerce app</h1>
    </div>
  )
}
export default App
