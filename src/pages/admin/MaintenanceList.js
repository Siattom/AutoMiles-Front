import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import Foot from '../../components/Foot';
import AdminNav from '../../components/AdminNav';
import { AdminService } from '../../_services/admin.service';
import { useNavigate } from 'react-router-dom';

const MaintenanceList = () => {
    const navigate = useNavigate()

    const [maintenances, setMaintenances] = useState([]);

    useEffect(() => {
        AdminService.getMaintenance()
            .then(res => {
                console.log(res.data.maintenance)
                setMaintenances(res.data.maintenance)
            })
            .catch(err => {
            console.log(err.message)
        })
    }, [])

    const handleEdit = (id) => {
        navigate('/maintenance/edit/'+id)
    }

    return (
        <div>
            <Logo />
            <AdminNav />

            <section className="sectionDivFacture">
                    {
                        maintenances.map(maintenance => (
                            <div key={maintenance.id} className="factureCarte">
                                <p>
                                    {maintenance.id}
                                </p>
                                <p className="pAlertePerso">{maintenance.kilometrage}</p>
                                <p className="pAlertePerso">{maintenance.contenu}</p>
                                <p><button className="logoDelete" onClick={() => handleEdit(maintenance.id)}>
                                        <img src="/icone/edit_FILL0_wght400_GRAD0_opsz48.svg" alt="logo supprimé" />
                                    </button>
                                </p>
                            </div>
                        ))
                    }

            </section>

            <Foot/>
        </div>
    );
};

export default MaintenanceList;