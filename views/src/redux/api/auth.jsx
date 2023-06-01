import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'auth/';
const auth = {};

// normal request for registration
auth.registerUser = async (data) => {
    const res = await axios
        .post(url.signUp, data, config.simpleHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};

// normal request for login
auth.signinUser = async (data) => {
    const res = await axios
        .post(url.signIn, data, config.simpleHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// normal request for status update
auth.updateStatus = async (data, id) => {
    const res = await axios
        .put(`${url.updateStatus}/${id}`, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
auth.userInfo = createAsyncThunk(`${name}userInfo`, async (email) => {
    const res = await axios.get(url.userInfo, email, config.basicHeader);
    return res;
});

auth.allUser = createAsyncThunk(`${name}allUser`, async () => {
    const res = await axios.get(url.allUser, config.basicHeader);
    return res;
});

export default auth;
