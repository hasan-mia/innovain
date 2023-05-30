import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import RenterLayout from '../layouts/RenterLayout';
import AdminDashboard from '../pages/AdminDashboard';
import Home from '../pages/Home';
import RenterDashboard from '../pages/RenterDashboard';
import AdminRoute from './AdminRoute';
import RenterRoute from './RenterRoute';

export default function AppRoute() {
    return (
        <Routes>
            {/*= ==============PUblic Route======== */}
            <Route path="/" element={<Home />} />
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
