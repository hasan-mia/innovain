/* eslint-disable no-unused-vars */
const config = {};
config.baseUrl = process.env.REACT_APP_BASE_URL;
config.accesstoken = process.env.REACT_APP_ACCESS_TOKEN_SECRET;
config.token = process.env.REACT_APP_AUTHORIZATION;
const session = localStorage.getItem('session');

config.simpleHeader = {
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

config.basicHeader = {
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${config.token}`,
    },
};

config.paramsWithHeader = (param) => {
    const params = {
        params: param,
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            authorization: `Bearer ${config.token}`,
        },
    };
    return params;
};

export default config;
