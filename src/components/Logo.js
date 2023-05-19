import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../_services/account.service';
import { roleService } from '../_services/role.service';

const Logo = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        roleService.getRole()
            .then(response => {
                const role = response.data.roles;
                setIsAdmin(role === '1');
            })
            .catch(error => {
                // Gérer l'erreur de récupération du rôle
                console.log(error);
            });
    }, []);

    const handleLogout = () => {
        accountService.logout();
        navigate('/logout');
    };

    const handleAdmin = () => {
        navigate('/maintenance/list');
    };

    return (
        <div className="logo">
            {isAdmin && (
                <img
                    src="/icone/setting.svg" alt="logo supprimé" className="notifLogoLeft" onClick={() => handleAdmin()} />
            )}

            <img src="/icone/logout.svg" alt="logo supprimé" className="notifLogo" onClick={() => handleLogout()} />
        </div>
    );
};

export default Logo;
