import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { NavLink, useNavigate } from 'react-router-dom';
import { alerteService } from '../_services/alerte.service';
import Foot from '../components/Foot';

const Home = () => {

    const [alertes, setAlertes] = useState([]);
    let navigate = useNavigate();

    const handleNav = (id) => {
        navigate('/alerte/info/'+id)
    } 

    useEffect(() => {
        alerteService.getMyAlertes()
            .then(res => {
                setAlertes(res.data.alertes)
                console.log(res.data.alertes)
            })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="Home">
            <Logo />
            <div>
                <h3>Alertes</h3>
                <div className="inserAlerte">
                <table>
                    <tbody>
                    {
                        alertes.slice(0, 3).map(alerte => (
                            <tr key={alerte.id} className="trHome" onClick={() => handleNav(alerte.id)}>
                                <td className="homeAlerteId" >
                                    {alerte.id}
                                </td>
                                <td className="homeAlerte" >{alerte.titre}</td>
                                <td className="homeAlerte" >{alerte.description}</td>
                                <td className="homeAlerte" >{alerte.vehicule.plaque}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                    </table>    
                </div>
                <h3>Rubriques</h3>
                <div className="pHome">
                    <img className="logoFoot" src="/icone/directions_car_filled_black_24dp.svg" alt="logo refresh" />
                    <p>
                        <NavLink to="/vehicule/list" className={"navlink"}>
                            Véhicule
                        </NavLink>
                    </p>
                    <img className="logoNextHome" src="/icone/next.svg" alt="logo next" />
                </div>
                <div className="pHome">
                    <img className="logoFoot" src="/icone/engineering_black_24dp.svg" alt="logo refresh" />
                    <p>
                        <NavLink to="/alerte" className={"navlink"}>
                            Entretien
                        </NavLink>
                    </p>
                    <img className="logoNextHome" src="/icone/next.svg" alt="logo next" />
                </div>
                <div className="pHome">
                    <img className="logoFoot" src="/icone/receipt_long_black_24dp.svg" alt="logo refresh" />
                    <p>
                        <NavLink to="/facture/historique" className={"navlink"}>
                            Facture
                        </NavLink>
                    </p>
                    <img className="logoNextHome" src="/icone/next.svg" alt="logo next" />
                </div>
                
            </div>
            <Foot />
        </div>
    );
};

export default Home;