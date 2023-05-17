import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import Alerte from '../../components/Alerte';
import { alerteService } from '../../_services/alerte.service'
import { useNavigate } from 'react-router-dom';
// ici on affiche les alertes de l'utilisateur

const AlertePerso = () => {

    const [alertes, setAlertes] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        alerteService.getMyAlertes()
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
                    navigate('/alerte')
            })
            .catch((err) => {
              console.log(err)
            })
        }
    }
    
    const handleNav = (id) => {
        navigate('/alerte/info/'+id)
    }
    

    return (
        <div className="AlertePerso">
            <Logo />
            <Alerte />
            
            <section className="sectionDivFacture">
                    {
                        alertes.map(alerte => (
                            <div key={alerte.id} className="factureCarte" onClick={() => handleNav(alerte.id)}>
                                <p>
                                    {alerte.id}
                                </p>
                                <p className="pAlertePerso" >{alerte.titre}</p>
                                <p className="pAlertePerso" >{alerte.description}</p>
                                <p className="pAlertePerso" >{alerte.vehicule.plaque}</p>
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

export default AlertePerso;