import React, { useContext } from 'react'
import './navbar.css'
import carticon from '../../../assets/navbar/cart.jpg'
import { Link } from 'react-router-dom'
import ShopbagIcon from '../../../assets/page/footer/shopbag_icon.png'
import { NavMenuContext } from '../../../context/NavMenuContext'
import { CartContext } from '../../../context/CartContext'

const Navbar = () => {
     //const [navMenu, setNavMenu]=useState("home");
     const {selectedNavMenu, setSelectedNavMenu} = useContext(NavMenuContext)
     const {itemCount} = useContext(CartContext);

  return (
    <div>
        <div className='nav-bar'>
            <div className='nav-bar-logo'>
                    <img src={ShopbagIcon} alt='' width='60px' height='60px'/>
                    <p>SHOPPER</p>             
            </div>
            <div className='nav-bar-menu-container'>
                {/**
                 * <ul className='nav-bar-menu'>
                    <li onClick={()=>{setNavMenu("home")}}><Link to='/' style={{textDecoration:'none'}}>Home</Link>{navMenu==="home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setNavMenu("men")}}><Link to='/men' style={{textDecoration:'none'}}>Men</Link>{navMenu==="men"?<hr/>:<></>}</li>
                    <li onClick={()=>{setNavMenu("women")}}><Link to='/women' style={{textDecoration:'none'}}>Women</Link>{navMenu==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setNavMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{navMenu==="kids"?<hr/>:<></>}</li>
                </ul>
                 */}
                <ul className='nav-bar-menu'>
                    <li onClick={()=>{setSelectedNavMenu("home")}}><Link to='/' style={{textDecoration:'none'}}>Home</Link>{selectedNavMenu==="home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setSelectedNavMenu("men")}}><Link to='/men' style={{textDecoration:'none'}}>Men</Link>{selectedNavMenu==="men"?<hr/>:<></>}</li>
                    <li onClick={()=>{setSelectedNavMenu("women")}}><Link to='/women' style={{textDecoration:'none'}}>Women</Link>{selectedNavMenu==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setSelectedNavMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{selectedNavMenu==="kids"?<hr/>:<></>}</li>
                </ul>
            </div>
            <div className='nav-bar-login-cart'>
                <Link to='/login'><button>login</button></Link>
                <Link to='/cart'>
                    <img src={carticon} alt="my cart" width="50px" height="50px"/>
                </Link>
                <div className='nav-cart-count'>{itemCount}</div>
            </div>

        </div>
    </div>
  )
}

export default Navbar
