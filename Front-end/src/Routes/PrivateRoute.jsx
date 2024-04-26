import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function PrivateRoute({children}){
    const {auth} = useContext(AuthContext)

    return auth ? children : <Navigate to= "/login"/>
}