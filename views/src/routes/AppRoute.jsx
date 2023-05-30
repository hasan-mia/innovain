/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { verify } from 'jsonwebtoken';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import AppLayout from '../layouts/AppLayout';
import RenterLayout from '../layouts/RenterLayout';
import AdminDashboard from '../pages/AdminDashboard';
import Home from '../pages/Home';
import RenterDashboard from '../pages/RenterDashboard';
import AdminRoute from './AdminRoute';
import RenterRoute from './RenterRoute';

const secretKey = process.env.REACT_APP_ACCESS_TOKEN_SECRET;

export default function AppRoute() {
    const dispatch = useDispatch();
    const { setAuth } = useSelector((state) => state.auth);
    const gettoken = (token) => {
        let decodedToken;
        try {
            decodedToken = verify(token, secretKey);
        } catch (error) {
            console.log('Invalid token:', error.message);
        }
        return decodedToken;
    };
    useEffect(() => {
        const session = localStorage.getItem('session');
        console.log(session);
        // if (session) {
        //     dispatch(setAuth(session));
        // }
    }, []);
    return (
        <Routes>
            {/*= ==============PUblic Route======== */}
            <Route
                element={
                    <AppLayout>
                        <Outlet />
                    </AppLayout>
                }
            >
                <Route path="/" element={<Home />} />
            </Route>

            {/* ==============Admin Route ======== */}
            <Route
                element={
                    <AdminLayout>
                        <Outlet />
                    </AdminLayout>
                }
            >
                <Route path="dashboard" element={<AdminRoute />}>
                    <Route path="/dashboard" element={<AdminDashboard />} />
                </Route>
            </Route>
            {/* ==============Renter Route ======== */}
            <Route
                element={
                    <RenterLayout>
                        <Outlet />
                    </RenterLayout>
                }
            >
                <Route path="dashboard/renter" element={<RenterRoute />}>
                    <Route path="/dashboard/renter" element={<RenterDashboard />} />
                </Route>
            </Route>
            <Route path="*" element={<Home />} />
        </Routes>
    );
}
