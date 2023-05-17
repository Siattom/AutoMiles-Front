import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import Alerte from '../../components/Alerte';
import { alerteService } from '../../_services/alerte.service';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
// afficher les alertes closent ou pas

const AlerteStatut = () => {

    const [alertes, setAlertes] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()

    function handleValidation(alerteId) {
        if (window.confirm('Etes-vous sûr que la maintenance peut être close ?')) {
          alerteService.postChangeStatut(alerteId)
            .then((res) => {
                console.log(res)
                setAlertes(alertes.filter(alerte => alerte.id !== alerteId));
                    navigate('/alerte')
            })
            .catch((err) => {
              console.log(err)
            })
        }
    }

    useEffect(() => {
        alerteService.getAlerteInfo(id)
            .then(res => {
                setAlertes(res.data.alertes)
                console.log(res.data.alertes)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [id])

    return (
        <div className="AlerteStatut">
            <Logo />
            <Alerte />
            <h1>Suivi des opérations</h1>
            <section className="sectionDivFacture">
            {
                alertes.map((alerte) => (
                    <div key={alerte.id} className="alerteInfoCarte">
                        <p>Entretiens des {alerte.titre} Km</p>
                        <p>Ce qu'il faut faire : {alerte.description}</p>
                        <p>Créé le {moment(alerte.created_at).format('DD/MM/YY')}</p>
                        <p>Véhicule : {alerte.vehicule.plaque}</p>
                        <button className="boutonFactureAssociees" onClick={() => handleValidation(alerte.id)}>
                            Classer
                        </button>  
                    </div>
                ))
            }

        </section>
        </div>
    );
};

export default AlerteStatut;