import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Stream from './pages/Stream/Stream';


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return(

    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stream' element={<Stream/>} />
      </Routes>

    </div>
    <Footer/>
    </>
    

  )

}
export default App