import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
                <div class="logo">TastyTrack<span class="dot">.</span></div>

            <p>Bringing delicious meals to your doorstep, anytime, anywhere. Craving something special? We've got you covered with fresh, hot, and fast delivery from your favorite restaurants. Experience the joy of effortless dining with just a tap!

Let us take care of the food while you enjoy every bite.</p>
            <div className="footer-social-icons">
              <a href="https://x.com/Shashidhar_98?t=ajT_VnKfeijs_Y9CpyaL6g&s=09"><img src={assets.twitter_icon} alt="" /></a>
              <a href="https://www.linkedin.com/in/shashidhar-angadi-051702251"><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        {/* <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div> */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 - 7676577935</li>
            <li>shashidharangadi14@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &#169;	TastyTrack.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer;
