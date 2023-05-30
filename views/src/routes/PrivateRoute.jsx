import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const { isLogin } = useSelector((state) => state.auth);
    return isLogin ? <Outlet /> : <Navigate to="/" />;
}
