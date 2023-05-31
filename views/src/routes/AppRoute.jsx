import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Authentication from '../pages/Authentication';
import Error from '../pages/Error';
import Home from '../pages/Home';
import AddCategory from '../pages/category/Add';
import Category from '../pages/category/Category';
import EditCategory from '../pages/category/Edit';
import AddTool from '../pages/tools/Add';
import EditTool from '../pages/tools/Edit';
import Tools from '../pages/tools/Tools';
import Users from '../pages/user/Users';

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
                {/* user */}
                <Route path="/users" element={<Users />} />
                {/* category */}
                <Route path="/categories" element={<Category />} />
                <Route path="/category/add" element={<AddCategory />} />
                <Route path="/category/edit/:id" element={<EditCategory />} />
                {/* Tools */}
                <Route path="/tools" element={<Tools />} />
                <Route path="/tool/add" element={<AddTool />} />
                <Route path="/tool/edit/:id" element={<EditTool />} />

                {/* ==============Private Route ======== */}
                {/* <Route path="dashboard" element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<AdminDashboard />} />
                </Route> */}
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
}
