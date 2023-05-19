import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import FactureNav from '../../components/FactureNav';
import { useNavigate, useParams } from 'react-router-dom';
import { factureService } from '../../_services/facture.service';
import Foot from '../../components/Foot';
// on gere le fomulaire de modification d'une facture

const FactureEdit = () => {
    const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [credentials, setCredentials] = useState({
        titre: "",
        garage: "",
        montant: ""
    })

    const [placeTitre, setPlaceTitre] = useState("");
    const [placeGarage, setPlaceGarage] = useState("");
    const [placeMontant, setPlaceMontant] = useState("");

    useEffect(() => {
        factureService.getFactureInfo(id)
            .then((res) => {
                setCredentials(res.data);
                setPlaceTitre(res.data.facture.titre);
                setPlaceGarage(res.data.facture.garage);
                setPlaceMontant(res.data.facture.montant);

                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [id]);

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const montantInt = parseInt(credentials.montant)
        setCredentials({
            ...credentials,
            montant: montantInt
        })
        factureService.postEditFacture(id, credentials)
            .then((res) => {
                console.log(res)
                navigate('/facture/')
            })
            .catch((err) => {
                console.log(err.message)
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="FactureEdit">
            <Logo />
            <FactureNav />
            <h1>Ajouter une facture</h1>
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="titre">Titre</label>
                    <input type="text" name="titre" placeholder={placeTitre} value={credentials.titre} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="garage">Garage</label>
                    <input type="text" name="garage" placeholder={placeGarage}    value={credentials.garage} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="montant">Montant</label>
                    <input type="text" name="montant" placeholder={placeMontant} value={credentials.montant} onChange={onChange}/>
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
            <Foot />
        </div>
    );
};

export default FactureEdit;