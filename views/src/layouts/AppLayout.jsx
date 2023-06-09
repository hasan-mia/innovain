/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header/Header';
import useAuth from '../hooks/useAuth';
import useSocket from '../hooks/useSocket';

export default function AppLayout({ children }) {
    useAuth();
    useSocket();

    return (
        <>
            <Header />
            <div className="container mx-auto px-8">{children}</div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />
        </>
    );
}
