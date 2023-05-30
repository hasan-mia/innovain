/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import AdminDashboard from '../pages/AdminDashboard';
import Authentication from '../pages/Authentication';
import Error from '../pages/Error';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

export default function AppRoute() {
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
                <Route path="/auth" element={<Authentication />} />
                {/* ==============Private Route ======== */}
                <Route path="dashboard" element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<AdminDashboard />} />
                </Route>
            </Route>

            <Route path="*" element={<Error />} />
        </Routes>
    );
}
