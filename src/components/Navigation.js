import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/auth/login" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Connexion</li>
                </NavLink>
                <NavLink to="/vehicule/list" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Garage</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;