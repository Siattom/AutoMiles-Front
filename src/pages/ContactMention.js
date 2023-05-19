import React from 'react';
import Logo from '../components/Logo';
import Foot from '../components/Foot';

const ContactMention = () => {
    return (
        <div className="ContactMention">
            <Logo />
            <p>
                Ici on aura les mentions légales et les contacts
            </p>
            <Foot />
        </div>
    );
};

export default ContactMention;