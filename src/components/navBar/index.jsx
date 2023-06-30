import CartWidget from "../CartWidget";
import '../../globals/styles.css';
import './navBar.css';
import React from "react";
import { Link, NavLink } from "react-router-dom";
// import React from "react-bootstrap";

const NavBar = () => {
    return (
            <nav className="NavBar">
                <div className="NavBar__brand">
                    <Link to='/' className='CategoryLink'>
                        <h3>The Travel Gadget</h3>
                    </Link>
                </div>
                <div className="Categories">
                    <NavLink to={'/category/lugagge'} className='CategoryLink'>Luggage</NavLink>
                    <NavLink to={'/category/accesories'} className='CategoryLink'>Accesories</NavLink>
                    <NavLink to={'/category/clothing'} className='CategoryLink'>Clothing</NavLink>
                    <CartWidget/>

                </div>
            </nav>
    )
}

export default NavBar;