import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import FactureNav from '../../components/FactureNav';
import { useNavigate } from 'react-router-dom';
import { vehiculeService } from '../../_services/vehicule.service';
import Foot from '../../components/Foot';

const FactureChoix = () => {

    let navigate = useNavigate()
    const [vehicules, setVehicules] = useState([]);

    // Définissez une fonction handleClick pour récupérer la valeur de la div cliquée
    const handleClick = (id) => {
        console.log(id);
        navigate('/facture/vehicule/'+id)
    }

    
    useEffect(() => {
        vehiculeService.getMyVehicule()
            .then(res => {
                setVehicules(res.data.vehicules)
                console.log(res.data.vehicules)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="Vehicule"> 
            <Logo />
            <FactureNav />
            <h1>Garage</h1>

                <section className="sectionDivFacture">
                    {
                        vehicules.map(vehicule => (
                            <div key={vehicule.id} value={vehicule.id} className="factureCarte">
                                <p className="">{vehicule.plaque}</p>
                                <p className="">{vehicule.marque}</p>
                                <p className="">{vehicule.model}</p>
                                <p className="">{vehicule.annee}</p>
                                <p className="">{vehicule.kilometrage}</p>
                                <button className="boutonFactureAssociees" onClick={() => handleClick(vehicule.id)}>
                                    Voir les factures associées
                                </button>
                            </div>
                        ))
                    }               
                </section>
            <Foot />
        </div>
    );
};

export default FactureChoix;