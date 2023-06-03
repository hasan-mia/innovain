import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slice/AuthSlice';
import CategorySlice from './slice/CategorySlice';
import PostSlice from './slice/PostSlice';
import SocketSlice from './slice/SocketSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        category: CategorySlice,
        post: PostSlice,
        socket: SocketSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'auth/allUser/fulfilled',
                    'category/allCategory/fulfilled',
                    'post/allPost/fulfilled',
                    'socket/setSocket',
                ],
            },
        }),
});
export default store;
