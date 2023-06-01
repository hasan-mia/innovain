/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuthRequire = (session) => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo || session) {
            navigate('/auth', { replace: true });
        }
    }, [navigate, userInfo, session]);
};

export default useAuthRequire;
