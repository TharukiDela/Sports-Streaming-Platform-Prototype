import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>

      <div class="header-section left">
     
        <div className="overlay"></div>
        <div className="label">Now Streaming</div>
     
      </div>

      <div class="header-section center">
        <div className="overlay"></div>
        <div className="label">Today's streams</div>
      </div>

      <div class="header-section right">
         <div className="overlay"></div>
        <div className="label">Comming up</div>
      </div>


        <div className="header-contents">
            <h5>Order Your Favourite Food here</h5>
            
        </div>

    </div>
  )
}

export default Header