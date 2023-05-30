/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SingIn from '../components/auth/SingIn';
import SingUp from '../components/auth/SingUp';

export default function Home() {
    const [type, setType] = useState('signin');
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const credentialHandler = (name, data) => {
        if (name === 'email') {
            setEmail(data);
        } else if (name === 'password') {
            setPass(data);
        }
    };
    const authController = () => {
        if (type === 'signin') {
            return (
                <SingIn
                    authController={authController}
                    setType={setType}
                    credentialHandler={credentialHandler}
                    email={email}
                    pass={pass}
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
                />
            );
        }
        return null;
    };
    return <div className="flex justify-center my-10">{authController()}</div>;
}
