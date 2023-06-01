/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuthRequire = (session) => {
    const { userInfo } = useSelector((state) => state.auth);
    console.log(userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate('/auth', { replace: false });
        }
    }, [navigate, userInfo]);
};

export default useAuthRequire;
