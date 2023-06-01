/* eslint-disable no-unused-vars */
const config = {};
config.baseUrl = process.env.REACT_APP_BASE_URL;
config.accesstoken = process.env.REACT_APP_ACCESS_TOKEN_SECRET;
config.token = process.env.REACT_APP_AUTHORIZATION;
const session = localStorage.getItem('session');

config.simpleHeader = {
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

config.basicHeader = {
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${config.token}`,
    },
};

config.payloadWithHeader = (payload) => {
    const params = {
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${config.token}`,
        },
        data: JSON.stringify(payload),
    };
    return params;
};

export default config;
