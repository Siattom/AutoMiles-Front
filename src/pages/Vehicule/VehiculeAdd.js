import React, { useState } from 'react';
import Logo from '../../components/Logo';
import { useNavigate } from 'react-router-dom';
import { vehiculeService } from '../../_services/vehicule.service';
import VehiculeNav from '../../components/VehiculeNav';
import Foot from '../../components/Foot';
// ici on gere le fomulaire de création d'un vehicule

const VehiculeAdd = () => {
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        plaque: "",
        marque: "",
        model: "",
        annee: "",
        kilometrage: "",
        ad_blue: false
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        vehiculeService.postAddVehicule(credentials)
            .then((res) => {
                console.log(res);
                navigate('/vehicule/list')
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="VehiculeAdd">
            <Logo />
            <VehiculeNav />
            <h1>Ajouter un véhicule</h1>
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="plaque">Plaque</label>
                    <input type="text" name="plaque" value={credentials.plaque} onChange={onChange}/>
                </div>

                <div className="group">
                    <label htmlFor="marque">Marque</label>
                    <input type="text" name="marque" value={credentials.marque} onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="model">Modèle</label>
                    <input type="text" name="model" value={credentials.model} onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="annee">Année</label>
                    <input type="text" name="annee" value={credentials.annee} onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="kilometrage">Kilométrage</label>
                    <input type="text" name="kilometrage" value={credentials.kilometrage} onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="ad_blue">Ad Blue</label>
                    <input type="checkbox" name="ad_blue" checked={credentials.ad_blue} onChange={(e) => setCredentials({ ...credentials, ad_blue: e.target.checked })} />
                </div>

                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>

            <Foot />
        </div>
    );
};

export default VehiculeAdd;