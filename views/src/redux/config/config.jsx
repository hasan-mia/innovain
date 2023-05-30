/* eslint-disable import/no-cycle */
import helpers from '../../helper/helpers';

const config = {};
config.baseUrl = process.env.REACT_APP_BASE_URL;
config.accesstoken = process.env.REACT_APP_ACCESS_TOKEN_SECRET;

config.basicHeader = {
    headers: {
        'Content-Type': 'application/json',
        authorization: config.accesstoken,
    },
};

config.paramsWithHeader = (param) => {
    const params = {
        params: param,
        headers: {
            'Content-Type': 'application/json',
            authorization: config.accesstoken,
        },
    };
    return params;
};

config.token = () => {
    const session = localStorage.getItem('session');
    let user = null;
    if (session) {
        user = JSON.parse(helpers.decrypt(session));
    }
    return user.token;
};

export default config;
