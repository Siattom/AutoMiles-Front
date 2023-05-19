import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminService } from '../../_services/admin.service';
import Logo from '../../components/Logo';
import AdminNav from '../../components/AdminNav';
import Foot from '../../components/Foot';

const MaintenanceEdit = () => {

    const navigate = useNavigate()
    let { id } = useParams();

    const [credentials, setCredentials] = useState({
        kilometrage: "",
        contenu: ""
    })

    const [maintenance, setMaintenance] = useState({})
    
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        AdminService.postEditMaintenance(id, credentials)
            .then(res => {
                console.log(res)
                navigate('/maintenance/list')
            })
            .catch(err => {
            console.log(err.message)
            })        
    }

    useEffect(() => {
        AdminService.getMaintenanceInfo(id)
            .then(res => {
                console.log(res.data.maintenance)
                setMaintenance(res.data.maintenance)
            })
            .catch(err => {
            console.log(err.message)
        })
    }, [id])

    return (
        <div>
            <Logo />
            <AdminNav />
                        <section className="sectionDivFacture">
                    {
                            <div key={maintenance.id} className="factureCarte">
                                <p>
                                    {maintenance.id}
                                </p>
                                <p className="pAlertePerso">{maintenance.kilometrage}</p>
                                <p className="pAlertePerso">{maintenance.contenu}</p>
                            </div>
                    }

            </section>

            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="kilometrage">Kilométrage</label>
                    <input type="text" name="kilometrage" value={credentials.kilometrage} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="contenu">Contenu</label>
                    <input type="text" name="contenu" value={credentials.contenu} onChange={onChange}/>
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
            <Foot />
        </div>
    );
};

export default MaintenanceEdit;