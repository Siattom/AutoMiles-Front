import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import Alerte from '../../components/Alerte';
import { alerteService } from '../../_services/alerte.service';
import { Link, Navigate } from 'react-router-dom';
import moment from 'moment';

const AlerteStatutClos = () => {
   
    const [alertes, setAlertes] = useState([]);

    useEffect(() => {
        alerteService.getAlerteByStatut()
            .then(res => {
                setAlertes(res.data.alertes)
                console.log(res.data.alertes)
            })
        .catch(err => console.log(err))
    }, [])

    function handleValidation(alerteId) {
        if (window.confirm('Etes-vous sûr que la maintenance peut être close ?')) {
          alerteService.postChangeStatut(alerteId)
            .then((res) => {
                console.log(res)
                setAlertes(alertes.filter(alerte => alerte.id !== alerteId));
                    Navigate(`/alerte/info/${alerteId}`)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }

    return (
        
    <div className="AlertePerso">
        <Logo />
        <Alerte />
            <h1>Entretiens effectués</h1>
            <section className="sectionDivFacture">
            {
                alertes.map((alerte) => (
                <div key={alerte.id} className="factureCarte">
                    <p>Entretiens des {alerte.titre} Km</p>
                    <p>Ce qu'il faut faire : {alerte.description}</p>
                    <p>Créé le {moment(alerte.created_at).format('DD/MM/YY')}</p>
                    <p>Véhicule : {alerte.vehicule.plaque}</p>
                        <button className="boutonFactureAssociees" onClick={() => handleValidation(alerte.id)}>
                            Déclasser
                        </button>
                </div>
                ))
            }

            </section>
    </div>
    );
};
export default AlerteStatutClos;