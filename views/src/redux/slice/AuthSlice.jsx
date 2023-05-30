/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import auth from '../api/auth';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        isError: false,
        errors: null,
        isSuccess: false,
        isAuth: false,
        user: null,
        userInfo: null,
    },
    reducers: {
        setAuth: (state, action) => {
            console.log(action);

            if (session) {
                // state.user = JSON.parse(helpers.decrypt(session));
                state.isAuth = true;
            }
        },
        logOut: (state) => {
            state.user = null;
            state.userInfo = null;
            state.isSuccess = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.isAuth = false;
            localStorage.removeItem('session');
        },
    },
    extraReducers: (builder) => {
        // // === sign up attempt=====
        // builder.addCase(auth.signUp.pending, (state) => {
        //     state.isLoading = true;
        // });

        // builder.addCase(auth.signUp.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = false;
        //     const { status, data } = action.payload;
        //     if (status === 201) {
        //         state.isSuccess = true;
        //         localStorage.setItem('session', data.token);
        //         toast.success(`${data.message}`);
        //     } else {
        //         toast.error('something went wrong');
        //     }
        // });

        // builder.addCase(auth.signUp.rejected, (state) => {
        //     state.isLoading = false;
        //     state.isError = true;
        // });

        // // === sign In attempt=====
        // builder.addCase(auth.signIn.pending, (state) => {
        //     state.isLoading = true;
        //     state.isError = false;
        // });

        // builder.addCase(auth.signIn.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = false;
        //     const { status, data } = action.payload;
        //     if (status === 200) {
        //         state.isSuccess = true;
        //         localStorage.setItem('session', data.token);
        //         toast.success(`${data.message}`);
        //     } else {
        //         toast.error('Please enter valid code');
        //     }
        // });

        // builder.addCase(auth.signIn.rejected, (state) => {
        //     state.isLoading = false;
        //     state.isError = true;
        // });

        // User infos
        builder.addCase(auth.userInfo.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(auth.userInfo.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.userInfo = data;
        });

        builder.addCase(auth.userInfo.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export const { setAuth, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
