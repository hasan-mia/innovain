/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import post from '../api/post';

const PostSlice = createSlice({
    name: 'post',
    initialState: {
        isLoading: false,
        isError: false,
        posts: null,
    },
    extraReducers: (builder) => {
        // get all post
        builder.addCase(post.allPost.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(post.allPost.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.posts = data;
        });

        builder.addCase(post.allPost.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default PostSlice.reducer;
