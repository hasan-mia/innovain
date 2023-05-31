/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { setAuth } from '../redux/slice/AuthSlice';

export default function PrivateRoute() {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const userAuth = () => {
        const session = localStorage.getItem('session');
        if (session) {
            // Split the token into its three parts: header, payload, signature
            const [headerBase64, payloadBase64, signature] = session.split('.');
            // Decode payload
            const decodedPayload = atob(payloadBase64);
            // Parse the decoded payload as JSON
            const payload = JSON.parse(decodedPayload);
            if (payload) {
                dispatch(setAuth(payload));
            }
            return true;
        }
        return false;
    };
    const hasAccess = userAuth();

    return hasAccess ? <Outlet /> : <Navigate to="/" />;
}
