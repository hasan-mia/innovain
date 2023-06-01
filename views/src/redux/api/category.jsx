import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'category/';
const category = {};

category.addCategory = async (data) => {
    const res = await axios
        .post(url.addCategory, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};

category.updateCategory = async (data, id) => {
    const res = await axios
        .put(`${url.deleteCategory}/${id}`, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};

category.deleteCategory = async (data, id) => {
    console.log(data);
    const res = await axios
        .delete(`${url.deleteCategory}/${id}`, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};

category.allCategory = createAsyncThunk(`${name}allCategory`, async () => {
    const res = await axios.get(url.allCategory, config.basicHeader);
    return res;
});

export default category;
