import React from 'react';
import { useNavigate } from 'react-router-dom';

const Foot = () => {

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    const handleVehiculeList = () => {
        navigate('/vehicule/list')
    }

    const handleInfo = () => {
        navigate('/info')
    }

    return (
        <div className="Foot">
            <p>
                <img className="logoFoot" src="/icone/home_white_24dp.svg" alt="logo home" onClick={() => handleHome()} />
            </p>
            <p>
                <img className="logoFoot" src="/icone/cached_white_24dp.svg" alt="logo refresh" onClick={() => handleVehiculeList()} />
            </p>
            <p>
                <img className="logoFoot" src="/icone/add_white_24dp.svg" alt="logo ajouter" onClick={() => handleInfo()} />
            </p>
        </div>
    );
};

export default Foot;