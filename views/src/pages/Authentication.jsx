/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SingIn from '../components/auth/SingIn';
import SingUp from '../components/auth/SingUp';
import auth from '../redux/api/auth';
import { setAuth } from '../redux/slice/AuthSlice';

export default function Authentication() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [type, setType] = useState('signin');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(null);
    // handle email, password credentials
    const credentialHandler = (name, data) => {
        if (name === 'email') {
            setEmail(data);
        } else if (name === 'password') {
            setPass(data);
        }
    };
    // handle signup
    const handleSignUp = async () => {
        setLoading(true);
        const data = {
            email,
            password: pass,
        };
        // dispatch(auth.signUp(data));
        const res = await auth.registerUser(data);
        if (res.status === 201) {
            toast.success(`${res.data.message}`);
            localStorage.setItem('session', res.data.token);
            const [headerBase64, payloadBase64, signature] = res.data.token.split('.');
            const decodedPayload = atob(payloadBase64);
            dispatch(setAuth(JSON.parse(decodedPayload)));
            setLoading(false);
            navigate('/dashboard', { replace: false });
        } else if (res.status === 406) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 409) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else {
            toast.success(`something went wrong`);
            setLoading(false);
        }
    };
    // handle  singin
    const handleSignIn = async () => {
        setLoading(true);
        const data = {
            email,
            password: pass,
        };
        // dispatch(auth.signIn(data));
        const res = await auth.signinUser(data);
        if (res.status === 200) {
            toast.success(`${res.data.message}`);
            localStorage.setItem('session', res.data.token);
            const [headerBase64, payloadBase64, signature] = res.data.token.split('.');
            const decodedPayload = atob(payloadBase64);
            dispatch(setAuth(JSON.parse(decodedPayload)));
            setLoading(false);
            navigate('/dashboard', { replace: false });
        } else if (res.status === 406) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 401) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 404) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 412) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else {
            toast.success(`something went wrong`);
            setLoading(false);
        }
    };

    // handle card
    const authController = () => {
        if (type === 'signin') {
            return (
                <SingIn
                    authController={authController}
                    setType={setType}
                    credentialHandler={credentialHandler}
                    email={email}
                    pass={pass}
                    handleSignIn={handleSignIn}
                    loading={loading}
                />
            );
        }
        if (type === 'signup') {
            return (
                <SingUp
                    authController={authController}
                    setType={setType}
                    credentialHandler={credentialHandler}
                    email={email}
                    pass={pass}
                    handleSignUp={handleSignUp}
                    loading={loading}
                />
            );
        }
        return null;
    };
    return <div className="flex justify-center my-10">{authController()}</div>;
}
