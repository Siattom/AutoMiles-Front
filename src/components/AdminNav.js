import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div className="alerte">
            <ul>
                <NavLink to="/maintenance/list" className={(nav) => (nav.isActive ? "nav-active": "")}>
                    <li>Général</li>
                </NavLink>
                <NavLink to="/maintenance/ajout" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Ajouter</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default AdminNav;