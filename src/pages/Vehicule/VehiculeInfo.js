import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import { vehiculeService } from '../../_services/vehicule.service';
import { useNavigate, useParams } from 'react-router-dom';
import VehiculeNav from '../../components/VehiculeNav';
import { alerteService } from '../../_services/alerte.service';
// ici on gere la récupération des infos d'un vehicule

const VehiculeInfo = () => {
    let navigate = useNavigate()

    const [credentials] = useState({
        kilometrage: "",
    })

    const [vehicules, setVehicules] = useState({});
    const [montant, setMontant] = useState({});
    const [alertes, setAlertes] = useState([]);
    let { id } = useParams();

    const handleEdit = (id) => {
        console.log('le bouton d\'edition')
        navigate(`/vehicule/edit/${vehicules.id}`)
    }

    const handleKilo = () => {
        const newKilo = prompt("Entrez le nouveau kilométrage :");
        if (newKilo !== null) {
            vehiculeService.postChangeKilo(id, credentials, newKilo)
                .then(res => {
                    console.log('Le kilométrage a été modifié.', res);
                    alert('Le kilométrage a été modifié.');
                    setVehicules({...vehicules, kilometrage: newKilo});
                })
                .catch(error => console.error(error));
        }
    }    
  
    useEffect(() => {
      vehiculeService.getVehiculeInfo(id)
        .then(res => {
          setVehicules(res.data.vehicules);
          console.log(res.data.vehicules);
        })
        .catch(err => console.log(err));
    }, [id]);

    useEffect(() => {
        vehiculeService.getMontantFacture(id)
            .then(res => {
                setMontant(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, [id]);

    useEffect(() => {
        alerteService.getVehiculeAlerte(id)
            .then(res => {
                setAlertes(res.data.alertes)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id]);
  
    return (
      <div className="VehiculeInfo">
        <Logo />
        <VehiculeNav />
            <h1>{vehicules.plaque}</h1>
            <div className="VehiculeInfoCarte">
            <p>Marque : {vehicules.marque}</p>
            <p>Modèle : {vehicules.model}</p>
            <p>Année : {vehicules.annee}</p>
            <p>Kilométrage : {vehicules.kilometrage}</p>
            <p>AdBlue : {vehicules.ad_blue ? 'oui' : 'non'}</p>
            <p>Montant total des dépense du véhicule : {montant.total}€</p>
            <p className="logoDelete" onClick={() => handleEdit(vehicules.id)}>
                <img src="/icone/edit_FILL0_wght400_GRAD0_opsz48.svg" alt="logo supprimé" />
            </p>
            <p className="changeKilo" onClick={() => handleKilo()}>Changer le kilométrage</p>
            </div>

            <div>
                <h3>Suivi d'entretien</h3>
                {
                    alertes.map(alerte => (
                        <tr key={alerte.id} className="trVehicInfo">
                            <td className="alerteInfoVehicule">N°{alerte.id}</td>
                            <td>{alerte.statut === false ? "En cours" : "Fini"}</td>
                            <td className="vehiculeBodyTd" >{alerte.titre}</td>
                            <td className="vehiculeBodyTd" >{alerte.description}</td>
                        </tr>
                    ))
                }
            </div>
      </div>
    );
  };
  
export default VehiculeInfo;