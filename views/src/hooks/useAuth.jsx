/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const useAuth = (session) => {
    const [payload, setPayload] = useState(null);
    useEffect(() => {
        // Split the token into its three parts: header, payload, signature
        const [headerBase64, payloadBase64, signature] = session.split('.');
        // Decode payload
        const decodedPayload = atob(payloadBase64);
        // Parse the decoded payload as JSON
        setPayload(JSON.parse(decodedPayload));
    }, [session]);

    return { payload };
};

export default useAuth;
