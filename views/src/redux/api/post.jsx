import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'post/';
const post = {};
// publish post
post.addPost = async (data) => {
    const res = await axios
        .post(url.addPost, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// update post
post.updatePost = async (data) => {
    const res = await axios
        .put(url.updatePost, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// delete post
post.deletePost = async (payload, id) => {
    const res = await axios
        .delete(`${url.deletePost}/${id}`, config.payloadWithHeader(payload))
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// all post
post.allPost = createAsyncThunk(`${name}allPost`, async () => {
    const res = await axios.get(url.allPost, config.basicHeader);
    return res;
});
// single post
post.singlePost = createAsyncThunk(`${name}singlePost`, async (id) => {
    const res = await axios.get(url.singlePost, config.paramsWithHeader({ id }));
    return res;
});

export default post;
