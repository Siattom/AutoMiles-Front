import React, { useState } from 'react';
import Logo from '../../components/Logo';
import AdminNav from '../../components/AdminNav';
import Foot from '../../components/Foot';
import { useNavigate } from 'react-router-dom';
import { AdminService } from '../../_services/admin.service';

const MaintenanceAjout = () => {
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        kilometrage: "",
        contenu: ""
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        AdminService.postAjoutMaintenance(credentials)
            .then(res => {
                console.log(res)
                navigate('/maintenance/list')
            })
            .catch(err => {
            console.log(err.message)
            })        
    }

    return (
        <div>
            <Logo />
            <AdminNav />
            <h1>Ajouter une Maintenance</h1>
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

export default MaintenanceAjout;