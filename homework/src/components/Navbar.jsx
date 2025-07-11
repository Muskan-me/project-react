import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <>
<header>
            <div className="nav">
                <div className="nav-align">
                    <div className="nav-left">
                        <img src="web.png" alt=""></img>

                    </div>
                    <div className="nav-right">
                        <ul  className="nav-links">
                           <Link to='/'>Home</Link>
                           <Link to='/about'>About</Link>
                           <Link to='/skills'>Skills</Link>
                           <Link to='/portfolio'>Portfolio</Link>
                           <Link to='/contact'>Contact</Link>

                        </ul>
                    </div>
                </div></div></header>
                
               
               
           


        </>
    )
}
export default Navbar;