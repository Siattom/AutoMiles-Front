import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../_services/account.service';

const Logo = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        accountService.logout()
        navigate('/logout')
    }

    return (
        <div className="logo">
            <img src="/icone/logout.svg" alt="logo supprimé" className="notifLogo" onClick={() => handleLogout()}/>
        </div>
    );
};

export default Logo;