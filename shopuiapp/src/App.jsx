import Navbar from './components/header/navbars/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop'
import ShopCategory from './pages/shopcategory'
import Products from './pages/products'
import Cart from './pages/cart'
import Login from './pages/login'
//import Men from './pages/men'
import Footer from './components/footer/footer'
import MenBanner from './assets/page/men/menbanner.png'
import WomenBanner from './assets/page/women/womenbanner.png'
import KidsBanner from './assets/page/kids/kidsbanner.png'

function App() {

  return (
    <div>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/men' element={<ShopCategory banner={MenBanner} category="men"/>}></Route>
          <Route path='/women' element={<ShopCategory banner={WomenBanner} category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={KidsBanner} category="kids"/>}></Route>
          <Route path='/product' element={<Products/>}>
              <Route path=':productId' element={<Products/>}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer/>
       </BrowserRouter> 
    </div>
  )
}
export default App
