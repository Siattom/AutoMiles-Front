import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import FactureNav from '../../components/FactureNav';
import { factureService } from '../../_services/facture.service';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import Foot from '../../components/Foot';
// on affiche les alertes d'un véhicule précis

const FactureVehicule = () => {

    let navigate = useNavigate()

    const [facture, setFacture] = useState([])
    let { id } = useParams();

    const handleEdit = (id) => {
        console.log(id)
        navigate('/facture/edit/'+id)
    }

    const handleDelete = (id) => {
        console.log('le bouton delete fonctionne pour l\'id ' + id);
        if (window.confirm('Etes-vous sûr de vouloir supprimer la facture ?')) {
            factureService.postDeleteFacture(id)
                .then((res) => {
                    console.log(res);
                    setFacture(facture.filter(vehicule => vehicule.id !== id));
                    navigate('/facture/historique')
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };
    
    useEffect(() => {
        factureService.getVehiculeFacture(id)
            .then(res => {
                setFacture(res.data.facture);
                console.log(res.data.facture);
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [id])

    return (
        <div className="FactureHistorique">
            <Logo />
            <FactureNav />
            <h1>Factures</h1>
            <section className="sectionDivFacture">
                {
                    facture.map(facture => (
                        <div key={facture.id} className="factureCarte">
                            <p>{facture.titre}</p>
                            <p>{facture.garage}</p>
                            <p>{facture.montant}€</p>
                            <p>{moment(facture.created_at).format('DD/MM/YY')}</p>
                            <p>{facture.vehicule.plaque}</p>
                            <div className="divBouton">
                                <p className="logoDelete" onClick={() => handleEdit(facture.id)}>
                                    <img src="/icone/edit_FILL0_wght400_GRAD0_opsz48.svg" alt="logo supprimé" />
                                </p>
                                <p className="logoDelete" onClick={() => handleDelete(facture.id)}>
                                    <img src="/icone/delete_FILL0_wght400_GRAD0_opsz48.svg" alt="logo supprimé" />
                                </p>
                            </div>
                        </div>
                    ))
                }
            </section>
            <Foot />
        </div>
    );
};

export default FactureVehicule;