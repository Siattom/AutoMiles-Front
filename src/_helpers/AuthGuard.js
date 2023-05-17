import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '../_services/account.service';

const AuthGuard = ({ children }) => {

// Écouteur d'événements pour détecter les erreurs HTTP
window.addEventListener('xhr', (event) => {
    if (event.detail.status === 401) {
      console.log('Il y a une erreur 401');
      accountService.deleteToken();
    }
  });
  

    if (!accountService.isLogged()) {
        return <Navigate to="/auth/login" />
    }

    return children
};

export default AuthGuard;