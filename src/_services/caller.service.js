import axios from "axios";
import { accountService } from "./account.service";

const Axios = axios.create({
    baseURL: 'http://localhost:8000'
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
                // Gérez l'erreur 404 ici si nécessaire
            }
        }

        return Promise.reject(error);
    }
);

export default Axios;
