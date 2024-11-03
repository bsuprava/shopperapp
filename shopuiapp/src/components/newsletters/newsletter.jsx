import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter-container'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our news channel and get updates on our exciting offers</p>
      <p>stay updated</p>
      <div className='newsletter-subscribe'>
        <input type='email' placeholder='Your mailid here..'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
