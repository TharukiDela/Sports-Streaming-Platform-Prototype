import React, { useContext, useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";


const Navbar = ({setShowLogin}) => {

    const[menu,setMenu] = useState("Home");

    

  return (

    <div className="navbar">
      

      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>About</a>
        <a href="#footer" onClick={()=>setMenu("Contact Us")}className={menu==="Contact Us"?"active":""}>Contact</a>
      </ul>

      <div className="navbar-right">
        <img src="src\images\search_icon.png" alt="" />
        

        <div className="navbar-search-icon">
         
          
        </div>

        <button onClick={()=>setShowLogin(true)}>Sign In/Login</button>
      </div>
    </div>
  );
};

export default Navbar;