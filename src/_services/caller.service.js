import axios from "axios";
import { accountService } from "./account.service";

const Axios = axios.create({
    baseURL: 'http://apiautomiles.automiles.fr/' 
    /* Il faut configurer comme plus haut avant une mise en ligne et décommenter quand on est en local */
    /* baseURL: 'http://localhost:8000' */
});

/**
 * Intercepteur pour le token
 */
Axios.interceptors.request.use(request => {
    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken();
    }

    return request;
});

/**
 * Intercepteur pour les erreurs de réponse
 */
Axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response) { 
            const status = error.response.status;

            if (status === 401) {
                console.log('Erreur 401 : Unauthorized');
                accountService.logout(); // Supprimez le token ici
            } else if (status === 404) {
                console.log('Erreur 404 : Not Found');
                accountService.logout();
                // Gérez l'erreur 404 ici si nécessaire
            }
        }

        return Promise.reject(error);
    }
);

export default Axios;
