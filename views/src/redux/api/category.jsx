/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'category/';
const category = {};
category.addCategory = createAsyncThunk(`${name}addCategory`, async (data) => {
    const res = await axios.post(url.addCategory, { data }, config.basicHeader);
    return res;
});

category.updateCategory = createAsyncThunk(`${name}updateCategory`, async (data, id) => {
    const res = await axios.put(url.updateCategory, { data }, config.paramsWithHeader({ id }));
    return res;
});

category.deleteCategory = createAsyncThunk(`${name}deleteCategory`, async (data, id) => {
    const res = await axios.put(url.deleteCategory, { data }, config.paramsWithHeader({ id }));
    return res;
});

category.allCategory = createAsyncThunk(`${name}allCategory`, async () => {
    const res = await axios.get(url.allCategory, config.basicHeader);
    return res;
});

export default category;
