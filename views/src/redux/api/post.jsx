/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'post/';
const post = {};
post.addPost = createAsyncThunk(`${name}addPost`, async (data) => {
    const res = await axios.post(url.addPost, { data }, config.basicHeader);
    return res;
});

post.updatePost = createAsyncThunk(`${name}updatePost`, async (data, id) => {
    const res = await axios.put(url.updatePost, { data }, config.paramsWithHeader({ id }));
    return res;
});

post.deletePost = createAsyncThunk(`${name}deletePost`, async (data, id) => {
    const res = await axios.put(url.deletePost, { data }, config.paramsWithHeader({ id }));
    return res;
});

post.allPost = createAsyncThunk(`${name}allPost`, async () => {
    const res = await axios.get(url.allPost, config.basicHeader);
    return res;
});

post.singlePost = createAsyncThunk(`${name}singlePost`, async (id) => {
    const res = await axios.get(url.singlePost, config.paramsWithHeader({ id }));
    return res;
});

export default post;
