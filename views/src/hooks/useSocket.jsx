import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import config from '../redux/config/config';
import { setSocket } from '../redux/slice/SocketSlice';

export default function useSocket() {
    const { socket } = useSelector((state) => state.socket);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!socket) {
            dispatch(setSocket(io(config.baseUrl)));
        }
    }, [socket, dispatch]);
}
