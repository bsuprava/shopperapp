import React from 'react'
import './CSS/loginsignup.css'

const Login = () => {
  return (
    <div className='login-home'>
      <div className='login-container'>
        <h1>SIGN UP</h1>
        <div className="login-signup-form">
          <input type='text' placeholder='your name..'/>
          <input type='password' placeholder='password'/>
          <input type='email' placeholder='email'/>
        </div>
        <button>Continue</button>
        <p className='login-signin'>Already have an account?
          <span> Sign in here</span>
        </p>
        <div className="login-signup-agree">
          <input type='checkbox' name='' id=''/>
          <p>I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Login
