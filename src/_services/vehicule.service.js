import Axios from "./caller.service";

let getMyVehicule = () => {
    return Axios.get('/api/vehicule/garage')
}

let getVehiculeInfo = (vid) => {
    return Axios.get('/api/vehicule/'+vid)
}

let postAddVehicule = (credentials) => {
    return Axios.post('/api/vehicule/nouveau', credentials)
}

let postEditVehicule = (credentials, vid) => {
    return Axios.post('/api/vehicule/'+vid +'/edit', credentials)
}

let postDeleteVehicule = (vid) => {
    return Axios.post(`/api/vehicule/delete/${vid}`);
}  

let getMontantFacture = (vid) => {
    return Axios.get(`/api/facture/montant/${vid}`);
}

let postChangeKilo = (vid, credentials, newKilo) => {
    return Axios.post(`/api/vehicule/kilometrage/${vid}`, { kilometrage: newKilo }, credentials)
}

export const vehiculeService = {
    getMyVehicule, getVehiculeInfo, postAddVehicule, postEditVehicule, postDeleteVehicule, getMontantFacture, postChangeKilo
}