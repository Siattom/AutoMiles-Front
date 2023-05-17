import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import FactureNav from '../../components/FactureNav';
import { factureService } from '../../_services/facture.service';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
// on gere l'affichage de la liste completes des alertes d'un utilisateur

const FactureHistorique = () => {

    let navigate = useNavigate()
    const [facture, setFactures] = useState([]);

    useEffect(() => {
        factureService.getHistoriqueFacture()
            .then(res => {
                setFactures(res.data.facture)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
            });        
    }, [])

    const handleEdit = (id) => {
        console.log(id)
        navigate('/facture/edit/'+id)
    }

    const handlePhoto = (id) => {
        navigate('/facture/info/'+id)
    }

    const handleDelete = (id) => {
        console.log('le bouton delete fonctionne pour l\'id ' + id);
        if (window.confirm('Etes-vous sûr de vouloir supprimer la facture ?')) {
            factureService.postDeleteFacture(id)
                .then((res) => {
                    console.log(res);
                    setFactures(facture.filter(vehicule => vehicule.id !== id));
                    navigate('/facture/historique')
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };
    
    return (
        <div className="FactureHistorique">
            <Logo />
            <FactureNav />

        <section className="sectionDivFacture">
                {
                    facture.map(facture => (
                        <div key={facture.id} className="factureCarte" onClick={() => handlePhoto(facture.id)}>
                            <p>{facture.titre}</p>
                            <p>{facture.garage}</p>
                            <p>{facture.montant}€</p>
                            <p>Fait à {facture.kilometrage} Km</p>
                            <p>{moment(facture.created_at).format('DD/MM/YY')}</p>
                            <p>{facture.vehicule.plaque}</p>
                            <p>{facture.montant.marque}</p>
                            <div className="divBouton">
                                <p className="logoDelete" onClick={() => handleEdit(facture.id)}>
                                    <img src="/icone/edit_FILL0_wght400_GRAD0_opsz48.svg" alt="logo supprimé" />
                                </p>
                                <p className="logoDelete" onClick={() => handlePhoto(facture.id)}>
                                    <img src="/icone/addPhoto.svg" alt="ajouter photographie" />
                                </p>
                                <p className="logoDelete" onClick={() => handleDelete(facture.id)}>
                                    <img src="/icone/delete_FILL0_wght400_GRAD0_opsz48.svg" alt="logo supprimé" />
                                </p>
                            </div>
                        </div>
                    ))
                }
        </section>
        </div>
    );
};

export default FactureHistorique;