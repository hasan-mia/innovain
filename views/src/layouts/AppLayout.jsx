/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header/Header';
import { setAuth } from '../redux/slice/AuthSlice';

export default function AppLayout({ children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        const session = localStorage.getItem('session');
        if (session) {
            // Split the token into its three parts: header, payload, signature
            const [headerBase64, payloadBase64, signature] = session.split('.');
            // Decode payload
            const decodedPayload = atob(payloadBase64);
            // Parse the decoded payload as JSON
            const payload = JSON.parse(decodedPayload);
            dispatch(setAuth(payload));
        }
    }, [dispatch]);
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
