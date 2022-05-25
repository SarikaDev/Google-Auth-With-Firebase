import React from 'react';
import  {useAuth} from '../contexts/AuthContext';
import {Outlet,Navigate} from 'react-router-dom';

const PrivateRoutes = () => {
    const { currentUser } = useAuth();

    return currentUser  ? <Outlet/> : <Navigate to='/'/>;
};

export default PrivateRoutes;