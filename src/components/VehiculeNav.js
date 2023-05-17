import React from 'react';
import { NavLink } from 'react-router-dom';

const VehiculeNav = () => {
    return (
        <div className="alerte">
            <ul>
                <NavLink to="/vehicule/list">
                    <li>Général</li>
                </NavLink>
                <NavLink to="/vehicule/add">
                    <li>Ajouter</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default VehiculeNav;