import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { vehiculeService } from '../../_services/vehicule.service';
import Logo from '../../components/Logo';
import VehiculeNav from '../../components/VehiculeNav';
import Foot from '../../components/Foot';

const VehiculeEdit = () => {
  const { id } = useParams(); // id du véhicule à modifier
  console.log('c\'est le'+id)
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [credentials, setCredentials] = useState({
    plaque: "",
    marque: "",
    model: "",
    annee: "",
    kilometrage: "",
    ad_blue: false
  });
    
  const [placePlaque, setPlacePlaque] = useState("");
  const [placeMarque, setPlaceMarque] = useState("");
  const [placeModel, setPlaceModel] = useState("");
  const [placeAnnee, setPlaceAnnee] = useState("");
  const [placeKilo, setPlaceKilo] = useState("");

  useEffect(() => {
      vehiculeService.getVehiculeInfo(id)
      .then((res) => {
          setCredentials(res.data);
          setPlacePlaque(res.data.vehicules.plaque);
          setPlaceMarque(res.data.vehicules.marque);
          setPlaceModel(res.data.vehicules.model);
          setPlaceAnnee(res.data.vehicules.annee);
          setPlaceKilo(res.data.vehicules.kilometrage);

          console.log(res.data.vehicules.plaque)
          setLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }, [id]);
    
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    vehiculeService.postEditVehicule(credentials, id)
      .then((res) => {
        console.log(res);
        navigate('/vehicule/list');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="VehiculeEdit">
      <Logo />
      <VehiculeNav />
      <h1>Modifier un véhicule</h1>
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="plaque">Plaque</label>
          <input type="text" name="plaque" placeholder={placePlaque} value={credentials.plaque} onChange={onChange} />
        </div>

        <div className="group">
          <label htmlFor="marque">Marque</label>
          <input type="text" name="marque" placeholder={placeMarque} value={credentials.marque} onChange={onChange} />
        </div>

        <div className="group">
          <label htmlFor="model">Modèle</label>
          <input type="text" name="model" placeholder={placeModel} value={credentials.model} onChange={onChange} />
        </div>

        <div className="group">
          <label htmlFor="annee">Année</label>
          <input type="text" name="annee" placeholder={placeAnnee} value={credentials.annee} onChange={onChange} />
        </div>

        <div className="group">
          <label htmlFor="kilometrage">Kilométrage</label>
          <input type="text" name="kilometrage" placeholder={placeKilo} value={credentials.kilometrage} onChange={onChange} />
        </div>

        <div className="group">
          <label htmlFor="ad_blue">Ad Blue</label>
          <input type="checkbox" name="ad_blue" checked={credentials.ad_blue} onChange={(e) => setCredentials({ ...credentials, ad_blue: e.target.checked })} />
        </div>

        <div className="group">
          <button>Modifier</button>
        </div>
      </form>
      <Foot />
    </div>
  );
};

export default VehiculeEdit;
