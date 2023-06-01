/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import auth from '../api/auth';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        isError: false,
        errors: null,
        isLogin: false,
        isAdmin: false,
        isRenter: false,
        users: null,
        userInfo: null,
    },
    reducers: {
        setAuth: (state, action) => {
            const { payload } = action;
            state.userInfo = payload;
            state.isAdmin = payload.isAdmin;
            state.isLoading = false;
            state.isLogin = true;
            if (!payload.isAdmin) {
                state.isRenter = true;
            } else {
                state.isRenter = false;
            }
        },
        logOut: (state) => {
            state.userInfo = null;
            state.isLoading = false;
            state.isLogin = false;
            localStorage.removeItem('session');
            toast.info('logout success');
        },
    },
    extraReducers: (builder) => {
        // get all users
        builder.addCase(auth.allUser.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(auth.allUser.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.users = data;
        });

        builder.addCase(auth.allUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export const { setAuth, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
