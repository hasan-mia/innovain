/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/slice/AuthSlice';

const useAuth = () => {
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
            if (payload) {
                dispatch(setAuth(payload));
            }
        }
    }, [dispatch]);
};

export default useAuth;
