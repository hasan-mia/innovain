/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'auth/';
const auth = {};
auth.signUp = createAsyncThunk(`${name}signUp`, async (data) => {
    const res = await axios.post(url.signUp, { data }, config.basicHeader);
    return res;
});

auth.signIn = createAsyncThunk(`${name}signIn`, async (data) => {
    const res = await axios.post(url.signIn, { data }, config.basicHeader);
    return res;
});

auth.allUser = createAsyncThunk(`${name}allUser`, async () => {
    const res = await axios.get(url.allUser, config.basicHeader);
    return res;
});

auth.userInfo = createAsyncThunk(`${name}userInfo`, async () => {
    const res = await axios.get(url.userInfo, config.paramsWithHeader(config.token()));
    return res;
});

auth.userLogout = async () => {
    const res = await axios
        .get(url.userLogout, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};

export default auth;
