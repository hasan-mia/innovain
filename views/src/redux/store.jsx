import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slice/AuthSlice';
import CategorySlice from './slice/CategorySlice';
import PostSlice from './slice/PostSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        category: CategorySlice,
        post: PostSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'auth/signUp/fulfilled',
                    'auth/signIn/fulfilled',
                    'auth/userInfo/fulfilled',
                    'category/allCategory/fulfilled',
                    'post/allPost/fulfilled',
                ],
            },
        }),
});
export default store;
