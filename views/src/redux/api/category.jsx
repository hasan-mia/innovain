import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'category/';
const category = {};
// publish category
category.addCategory = async (data) => {
    const res = await axios
        .post(url.addCategory, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// update category
category.updateCategory = async (data, id) => {
    const res = await axios
        .put(`${url.deleteCategory}/${id}`, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// delete category
category.deleteCategory = async (payload, id) => {
    const res = await axios
        .delete(`${url.deleteCategory}/${id}`, config.payloadWithHeader(payload))
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// get all category
category.allCategory = createAsyncThunk(`${name}allCategory`, async () => {
    const res = await axios.get(url.allCategory, config.basicHeader);
    return res;
});

export default category;
