import React from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import cta_img from '../../assets/images/cta-logo-one.svg'
import cta_img2 from '../../assets/images/cta-logo-two.png'

const Login = () => {
  return (
    <div className='login_page'>
      <div className="container">
        <div className="image">
          <img src={cta_img} alt="" />
        </div>
        <button className='info_btn'>get all there</button>
        <div className="div">
          <p>Get Premier Access to Raya and The Last Dragon for an additional fee with a Disney+ subscription <br />As of 02/08/24, the price of Disney+ and The Disney Bundle will increase by $1.</p>
        </div>
        <div className="image2">
          <img src={cta_img2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
