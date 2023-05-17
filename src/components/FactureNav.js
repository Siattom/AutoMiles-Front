import React from 'react';
import { NavLink } from 'react-router-dom';

const FactureNav = () => {
    return (
        <div className="alerte">
            <ul>
                <NavLink to="/facture/historique">
                    <li>Général</li>
                </NavLink>
                <NavLink to="/facture/">
                    <li>Ajouter</li>
                </NavLink>
                <NavLink to="/facture/vehicule">
                    <li>Vehicule</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default FactureNav;