import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'

import Stream from '../Stream/Stream'

const home = () => {

 

  return (
    <div>
      <Header/>
      <Stream />
    
    </div>
  )
}

export default home