import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={nav => nav.isActivective ? "nav-active" : ""}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/coups-de-coeur"
                            className={nav => nav.isActivective ? "nav-active" : ""}
                        >
                            Coups de coeur
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <h1>React Movies</h1>
        </div>
    );
};

export default Header;