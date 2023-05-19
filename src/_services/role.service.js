import Axios from "./caller.service";

let getRole = () => {
    return Axios.get('/api/role')
}

export const roleService = {
    getRole
}