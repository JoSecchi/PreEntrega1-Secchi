import CartWidget from "../CartWidget";
import React from "react";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a href="#" className="nav__link">Meus Petatis</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a href="#" className="nav__link">Categories</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Tiendas</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Nosotros</a>
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