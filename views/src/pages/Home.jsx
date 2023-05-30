/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingIn from '../components/auth/SingIn';
import SingUp from '../components/auth/SingUp';
import auth from '../redux/api/auth';

export default function Home() {
    const dispatch = useDispatch();
    const { user, isSuccess } = useSelector((state) => state.auth);
    const [type, setType] = useState('signin');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // handle email, password credentials
    const credentialHandler = (name, data) => {
        if (name === 'email') {
            setEmail(data);
        } else if (name === 'password') {
            setPass(data);
        }
    };
    // handle signup
    const handleSignUp = (e) => {
        e.preventDefault();
        const data = {
            email,
            password: pass,
        };
        dispatch(auth.signUp(data));
    };
    // handle  singin
    const handleSignIn = (e) => {
        e.preventDefault();
        const data = {
            email,
            password: pass,
        };
        dispatch(auth.signIn(data));
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
                    handleSignUpIn={handleSignIn}
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
                    handleSignUpIn={handleSignUp}
                />
            );
        }
        return null;
    };
    // useEffect(() => {
    //     dispatch(auth.signUp({ email, pass }));
    // });
    return <div className="flex justify-center my-10">{authController()}</div>;
}
