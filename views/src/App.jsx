/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/AppRoute';

function App() {
    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
}

export default App;
