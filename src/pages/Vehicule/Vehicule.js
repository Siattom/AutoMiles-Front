import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';

import { vehiculeService } from '../../_services/vehicule.service';
import { NavLink, useNavigate } from 'react-router-dom';
import VehiculeNav from '../../components/VehiculeNav';
import Foot from '../../components/Foot';
// ici on gere la liste des véhicules de l'utilisateur

const Vehicule = () => {
    let navigate = useNavigate()
    const [vehicules, setVehicules] = useState([]);

    const handleDelete = (id) => {
        console.log('le bouton delete fonctionne pour l\'id ' + id);
        if (window.confirm('Etes-vous sûr de vouloir supprimer le véhicule ?')) {
            vehiculeService.postDeleteVehicule(id)
                .then((res) => {
                    console.log(res);
                    setVehicules(vehicules.filter(vehicule => vehicule.id !== id));
                    navigate('/vehicule/list')
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    const handleNav = (id) => {
        navigate('/vehicule/info/'+id)
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
        <div className="AlertePerso"> 
            <Logo />
            <VehiculeNav />
            <h1>Garage</h1>

            <section className="sectionDivFacture">
                    {
                        vehicules.map(vehicule => (
                            <div key={vehicule.id} className="factureCarte" onClick={() => handleNav(vehicule.id)}>
                                <p>
                                    {vehicule.id}
                                </p>
                                <p className="pAlertePerso">{vehicule.plaque}</p>
                                <p className="pAlertePerso">{vehicule.marque}</p>
                                <p className="pAlertePerso">{vehicule.model}</p>
                                <p className="pAlertePerso">{vehicule.annee}</p>
                                <p className="pAlertePerso">{vehicule.kilometrage} Km</p>
                                <p className="pAlertePerso">AdBlue : {vehicule.ad_blue ? 'oui' : 'non'}</p>
                                <p><button className="logoDelete" onClick={() => handleDelete(vehicule.id)}>
                                        <img src="/icone/delete_FILL0_wght400_GRAD0_opsz48.svg" alt="logo supprimé" />
                                    </button>
                                </p>
                            </div>
                        ))
                    }

                <button className="bouton grand">
                    <NavLink to="/vehicule/add" className={"navlink"}>
                        Ajouter
                    </NavLink>
                </button>

            </section>
            <Foot/>
        </div>
    );
};


export default Vehicule;