import React from 'react'
import './footer.css'
import FacebookIcon from '../../assets/page/footer/facebook_icon.png'
import TwitterIcon from '../../assets/page/footer/twitter_icon.png'
import WhatsappIcon from '../../assets/page/footer/whatsapp_icon.png'
import ShopbagIcon from '../../assets/page/footer/shopbag_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={ShopbagIcon} alt='' width='60px' height='60px'/>
        <p>SHOPPER</p>
      </div>
      <div className="footer-links">
        <ul>
            <li>Company</li>
            <li>Offices</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="footer-social-links">
        <div className="footer-social-icon">
            <img alt='' src={FacebookIcon} width='70px' height='70px'/>
        </div>
        <div className="footer-social-icon" >
            <img alt='' src={TwitterIcon} width='70px' height='70px'/>
        </div>
        <div className="footer-social-icon" >
            <img alt='' src={WhatsappIcon} width='70px' height='70px'/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2024. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
