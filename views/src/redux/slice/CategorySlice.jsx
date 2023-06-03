/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import category from '../api/category';

const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        isLoading: false,
        isError: false,
        categories: null,
    },
    extraReducers: (builder) => {
        // get all post
        builder.addCase(category.allCategory.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(category.allCategory.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.categories = data.data;
        });

        builder.addCase(category.allCategory.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default CategorySlice.reducer;
