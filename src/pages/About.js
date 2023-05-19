import React from 'react';
import Logo from '../components/Logo';

// ici c'est pour la gestion du bouton de déconnexion 
import { accountService } from '../_services/account.service';
import { useNavigate } from 'react-router-dom';
import Foot from '../components/Foot';
// fin

const About = () => {
    // pour la deconnexion
    let navigate = useNavigate()
    const logout = () => {
        accountService.logout()
        navigate('/')
    }
    // fin

    return (
        <div>
            <Logo />
            <h1>A propos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque purus in magna sagittis viverra. Fusce in tellus ac ante suscipit gravida. Aliquam nunc erat, tincidunt quis maximus et, eleifend in ex. Proin non tellus at neque semper placerat. Vestibulum hendrerit, nisl ac commodo hendrerit, purus urna dignissim augue, vitae maximus massa augue vitae lacus. Nunc finibus at lorem a placerat. Nunc vulputate feugiat turpis, vitae fringilla ipsum elementum quis. Aliquam erat volutpat. Ut faucibus justo justo, sit amet vestibulum velit hendrerit vitae. Integer venenatis semper dui ac interdum. Proin efficitur tempus augue lobortis iaculis. Etiam consectetur lectus quis massa.</p>

            {/* bouton déconnexion */}
            <button onClick={logout}> Logout </button>
            {/* fin */}
            <Foot />
        </div>
    );
};

export default About;