import React from 'react';
import Logo from '../../components/Logo';
import Foot from '../../components/Foot';

const NotFound = () => {
    return (
        <div className="notFound">
            <Logo />
            <h1>404 - Page non trouvé</h1>
            <p>Désolé l'URL recherché n'a pas été trouvé sur le serveur.</p>
            <Foot />
        </div>
    );
};

export default NotFound;