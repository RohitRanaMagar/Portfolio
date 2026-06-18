import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (sectionId) => {
        setMenuOpen(false);
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: sectionId } });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(

        <header className='navbar'>
            <div className="logo">
                <h1>ROHIT</h1>
            </div>
            <GiHamburgerMenu className="nav-open" onClick={() => setMenuOpen(true)} />

            <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
                <IoClose className="nav-close" onClick={() => setMenuOpen(false)} />
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}>Home</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>About</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>Services</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("projects"); }}>Projects</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>Contact</a></li>
            </ul>
            <div className="Connectwithme">
                <a href="https://www.facebook.com/rohit.rana.magar.717199/" target="_blank">Connect With Me</a>
            </div>
        </header>
    )
}
export default Navbar;