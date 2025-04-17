import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <div className="footer-social-icon">
                    <img src="src\images\facebook_icon.png" alt="" />
                    <img src="src\images\twitter_icon.png" alt="" />
                    <img src="src\images\linkedin_icon.png" alt="" />
                   
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                   <li>+94-77-123-4567</li>
                   <li>contact@abc.com</li> 
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright"> Copyright 2025 @ Abc.com - All Right Reserved.</p>
        
        
    </div>
  )
}

export default Footer