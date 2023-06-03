/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const SocketSlice = createSlice({
    name: 'socket',
    initialState: {
        socket: null,
    },
    reducers: {
        setSocket: (state, action) => {
            const { payload } = action;
            state.socket = payload;
        },
    },
});
export const { setSocket } = SocketSlice.actions;
export default SocketSlice.reducer;
