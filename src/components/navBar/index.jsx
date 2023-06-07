import CartWidget from "../CartWidget";
import '../../globals/styles.css';
import './NavBar.css';
import React from "react";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a href="#" className="nav__link">The Travel Gadget</a>
                </div>
                <ul className="nav__list">
                    <li>
                        
                        <a href="#" className="nav__link">Categories</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Pick up stores</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Our Team</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Log In</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">
                            <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;