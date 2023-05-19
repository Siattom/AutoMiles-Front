import Axios from "./caller.service";

let getMaintenance = () => {
    return Axios.get('/api/maintenance/liste')
}

let postEditMaintenance = (id, credentials) => {
    return Axios.post('/api/maintenance/'+id+'/edit', credentials)
}

let postAjoutMaintenance = (credentials) => {
    return Axios.post('/api/maintenance/ajout', credentials)
}

let getMaintenanceInfo = (id) => {
    return Axios.get('/api/maintenance/'+id+'/info')
}

export const AdminService = {
    getMaintenance, postEditMaintenance, postAjoutMaintenance, getMaintenanceInfo
} 