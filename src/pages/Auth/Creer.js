import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service';
import Logo from '../../components/Logo';

const Creer = () => {
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        nom: "",
        prenom: "",
        email: "",
        password : ""
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        accountService.utilisateurCreate(credentials)
            .then(res => {
                console.log(res)
                navigate('/auth/login')
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    return (
        <div className="VehiculeAdd">
            <Logo />
            <h1>Créer son compte</h1>
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" value={credentials.nom} onChange={onChange}/>
                </div>

                <div className="group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" name="prenom" value={credentials.prenom} onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={onChange} />
                </div>

                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name="password" value={credentials.password} onChange={onChange} />
                </div>

                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default Creer;