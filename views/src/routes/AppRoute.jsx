import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Authentication from '../pages/Authentication';
import Error from '../pages/Error';
import Home from '../pages/Home';
import AddRoom from '../pages/room/Add';
import EditRoom from '../pages/room/Edit';
import Room from '../pages/room/Room';
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
                <Route path="/dashboard" element={<Tools />} />
                {/* user */}
                <Route path="/users" element={<Users />} />
                {/* category */}
                <Route path="/rooms" element={<Room />} />
                <Route path="/room/add" element={<AddRoom />} />
                <Route path="/room/edit/:id" element={<EditRoom />} />
                {/* Tools */}
                <Route path="/tools" element={<Tools />} />
                <Route path="/tool/add" element={<AddTool />} />
                <Route path="/tool/edit/:id" element={<EditTool />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
}
