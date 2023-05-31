/* eslint-disable import/no-cycle */

const config = {};
config.baseUrl = process.env.REACT_APP_BASE_URL;
config.accesstoken = process.env.REACT_APP_ACCESS_TOKEN_SECRET;
const session = localStorage.getItem('session');

config.simpleHeader = {
    headers: {
        'content-type': 'application/json',
    },
};

config.basicHeader = {
    headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${session}`,
    },
};

config.paramsWithHeader = (param) => {
    const params = {
        params: param,
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${session}`,
        },
    };
    return params;
};

export default config;
