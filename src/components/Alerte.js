import React from 'react';
import { NavLink } from 'react-router-dom';

const Alerte = () => {
    return (
        <div className="alerte">
            <ul>
                <NavLink to="/alerte" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>Général</li>
                </NavLink>
                <NavLink to="/alerte/statut/clos" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Finis</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Alerte;