import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import Header from '../components/header/Header';

export default function RenterLayout({ children }) {
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
