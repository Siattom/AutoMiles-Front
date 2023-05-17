import React, { useState } from 'react';
import Logo from '../../components/Logo';
import FactureNav from '../../components/FactureNav';
import { useNavigate, useParams } from 'react-router-dom';
import { factureService } from '../../_services/facture.service';
// on gere le formulaire de création d'une facture

const FactureAdd = () => {
    let navigate = useNavigate()

    const { id } = useParams();

    const [credentials, setCredentials] = useState({
        titre: "",
        garage: "",
        montant: "", 
        kilometrage: ""
    })  
    
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const montantInt = parseInt(credentials.montant)
        setCredentials({
            ...credentials,
            montant: montantInt
        })
        factureService.postAddFacture(id, credentials)
            .then((res) => {
                console.log(res)
                navigate('/facture/')
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

    return (
        <div className="FactureAdd">
            <Logo />
            <FactureNav />
            <h1>Ajouter une facture</h1>
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="titre">Entretien</label>
                    <input type="text" name="titre" value={credentials.titre} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="garage">Garage</label>
                    <input type="text" name="garage" value={credentials.garage} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="montant">Montant</label>
                    <input type="text" name="montant" value={credentials.montant} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="kilometrage">kilométrage</label>
                    <input type="text" name="kilometrage" value={credentials.kilometrage} onChange={onChange}/>
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default FactureAdd;