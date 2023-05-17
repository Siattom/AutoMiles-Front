import Axios from "./caller.service"

let postAddFacture = (id, credentials) => {
    return Axios.post('/api/facture/nouvelle/'+id, credentials)
}

let postEditFacture = (id, credentials) => {
    return Axios.post('/api/facture/'+id+'/edit', credentials)
}

let getFactureInfo = (id) => {
    return Axios.get('/api/facture/info/'+id)
}

let getHistoriqueFacture = () => {
    return Axios.get('/api/facture/historique')
}

let getVehiculeFacture = (id) => {
    return Axios.get('/api/facture/vehicule/'+id)
}

let postDeleteFacture = (id) => {
    return Axios.post('/api/facture/delete/'+id)
}

let postAjoutPhoto = (id, image) => {
    const formData = new FormData();
    formData.append('image', image);
  
    return Axios.post('/api/facture/photo/' + id, formData);
  };  

export const factureService = {
    postAddFacture, postEditFacture, getFactureInfo, getHistoriqueFacture, getVehiculeFacture, postDeleteFacture, postAjoutPhoto
}