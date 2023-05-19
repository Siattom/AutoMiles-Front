import React, { useState } from 'react';
import './auth.css';
import Logo from '../../components/Logo';
import { accountService } from '../../_services/account.service';
import { useNavigate } from 'react-router-dom';
import Foot from '../../components/Foot';

const Login = () => {
    let navigate = useNavigate()
    // const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    
        const onChange = (e) => {
            setCredentials({
                ...credentials,
                [e.target.name]: e.target.value
            })
        }
    
    const handleCreate = (e) => {
        navigate('/creer')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(credentials)
            .then((res) => {
                console.log(res);
                accountService.saveToken(res.data.token)
                navigate('/')
            })
            .catch((error) => {
              console.log(error.message);
            });
    }

    return (
        <div>
            <Logo />
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="login">Identifiant</label>
                    <input type="text" name="username" value={credentials.username} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" value={credentials.password} onChange={onChange}/> 
                </div>
                <div className="group">
                    <button>Connexion</button>
                </div>
                <div className="boutonCreer" onClick={handleCreate}>
                    <p>Créer un compte</p>
                </div>
            </form>
            <Foot />
        </div>
    );
};

export default Login;