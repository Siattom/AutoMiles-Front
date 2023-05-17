import Axios from "./caller.service";

let getMyAlertes = () => {
    return Axios.get('/api/alerte/mes-alertes')
}

let postChangeStatut = (id, credentials) => {
    return Axios.post('/api/alerte/change/'+id, credentials)
}

let getVehiculeAlerte = (id) => {
    return Axios.get('/api/alerte/vehicule/'+id)
}

let getAlerteByStatut = () => {
    return Axios.get('/api/alerte/statut/1')
}

let getAlerteInfo = (id) => {
    return Axios.get('/api/alerte/info/'+id)
}

export const alerteService = {
    getMyAlertes, postChangeStatut, getVehiculeAlerte, getAlerteByStatut, getAlerteInfo
} 