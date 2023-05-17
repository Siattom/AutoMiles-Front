import React from 'react';
import Login from './Login';
import Home from '../Home';
import { Route, Routes } from 'react-router-dom';

const AuthRouter = () => {
    return (        
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
        </Routes>    
    );
};

export default AuthRouter;