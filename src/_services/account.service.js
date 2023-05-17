import Axios from "./caller.service"

let login = (credentials) => {
    return Axios.post('/api/login_check', credentials)
}

let utilisateurCreate = (credentials) => {
    return Axios.post('/utilisateur/nouveau', credentials)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')

    return !!token
}

let getToken = () => {
    return localStorage.getItem('token')
}

let deleteToken = () => {
        localStorage.removeItem('token');
}

export const accountService = {
    login, utilisateurCreate, saveToken, logout, isLogged, getToken, deleteToken
}