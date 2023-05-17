import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import FactureNav from '../../components/FactureNav';
import { useParams } from 'react-router-dom';
import { factureService } from '../../_services/facture.service';
import moment from 'moment';

const FactureInfo = () => {

    const { id } = useParams();

    const [facture, setFactures] = useState({});
    const [file, setFile] = useState()
    
    const handleFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
      };
      
      const onSubmit = (e) => {
        e.preventDefault();
        factureService.postAjoutPhoto(id, file)
          .then(res => {
              console.log(res);
              window.location.reload();
          })
          .catch(err => {
            console.log(err.message);
          });
      };
  
      useEffect(() => {
          factureService.getFactureInfo(id)
              .then((res) => {
                  setFactures(res.data.facture)
                  console.log(res.data.facture.photo)
              })
              .catch(err => {
                  console.log(err.message);
              });
      }, [id]);

    return (
        <div className="VehiculeInfo">
            <Logo />
            <FactureNav />
                <div key={facture.id} className="VehiculeInfoCarte">
                    <p>{facture.titre}</p>
                    <p>{facture.garage}</p>
                    <p>{facture.montant}€</p>
                    <p>Fait à {facture.kilometrage} Km</p>
                    <p>{moment(facture.created_at).format('DD/MM/YY')}</p>
                    <p>{facture.vehicule && facture.vehicule.plaque}</p>
                    <p>{facture.vehicule && facture.vehicule.marque}</p>
                </div>
                
            <form onSubmit={onSubmit}>
                <div className="addPhoto">
                    <div className="group">
                        <label htmlFor="name">Photo</label>
                        <input type="file" name="image" onChange={handleFile}/>
                    </div>
                    <div className="group">
                        <button>Ajouter</button>
                    </div>
                </div>
            </form>
            <div className="photoFichier">
                {facture && facture.photo && facture.photo.map((photo, index) => (
                    <img key={index} src={`http://localhost:8000/uploads/${photo.name}`} alt={`Facture ${index + 1}`} />
                ))}
            </div>

        </div>
    );
};

export default FactureInfo;