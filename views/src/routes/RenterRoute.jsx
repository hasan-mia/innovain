import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function RenterRoute() {
    const userAuth = () =>
        // const session = localStorage.getItem('session');
        // console.log(session);
        // if (session) {
        //     const exists = helpers.decrypt(session);
        //     if (exists) {
        //         return true;
        //     }
        // }
        true;
    const hasAccess = userAuth();
    return hasAccess ? <Outlet /> : <Navigate to="/" />;
}
