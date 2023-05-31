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

auth.signUp = createAsyncThunk(`${name}signUp`, async (data) => {
    const res = await axios.post(url.signUp, data, config.simpleHeader);
    return res;
});

auth.signIn = createAsyncThunk(`${name}signIn`, async (data) => {
    const res = await axios.post(url.signIn, data, config.simpleHeader);
    return res;
});

auth.updateStatus = createAsyncThunk(`${name}signIn`, async (data, id) => {
    const res = await axios.put(url.updateStatus, data, config.paramsWithHeader({ id }));
    return res;
});

auth.userInfo = createAsyncThunk(`${name}userInfo`, async (email) => {
    const res = await axios.get(url.userInfo, email, config.basicHeader);
    return res;
});

auth.allUser = createAsyncThunk(`${name}allUser`, async (isAdmin) => {
    const res = await axios.get(url.allUser, { isAdmin }, config.basicHeader);
    return res;
});

export default auth;
