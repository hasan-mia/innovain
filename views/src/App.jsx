/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { io } from 'socket.io-client';
import config from './redux/config/config';
import AppRoute from './routes/AppRoute';

function App() {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        setSocket(io(config.baseUrl));
    }, []);
    console.log(socket);

    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
}

export default App;
