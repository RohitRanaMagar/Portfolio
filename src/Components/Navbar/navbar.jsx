import React, { useState } from "react";
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


function Navbar(){
        const [menuOpen, setMenuOpen] = useState(false);

    return(

        <header className='navbar'>
            <div className="logo">
                <h1 >
      ROHIT
      </h1>

            </div>
            <GiHamburgerMenu className="nav-open" onClick={() => setMenuOpen(true)} />


            <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
                <IoClose className="nav-close" onClick={() => setMenuOpen(false)} />
                <li><a href="#hero"     onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about"    onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact"  onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
            <div className="Connectwithme">
                Connect with me
            </div>
        </header>
    )
}
export default Navbar;