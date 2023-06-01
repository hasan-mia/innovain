/* eslint-disable no-underscore-dangle */
import { Card, Input, Option, Select, Spinner } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuthRequire from '../../hooks/useAuthRequire';
import category from '../../redux/api/category';
import post from '../../redux/api/post';

export default function Add() {
    useAuthRequire();
    const { isAdmin } = useSelector((state) => state.auth);
    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const credentialHandler = (name, data) => {
        if (name === 'title') {
            setTitle(data);
        }
    };

    const categoryHandle = async () => {
        setLoading(true);
        const toolData = {
            title,
            isAdmin,
            catId: selectedValue,
        };

        const res = await post.addPost(toolData);
        if (res.status === 200) {
            toast.success(`${res.data.message}`);
            setLoading(false);
            dispatch(post.allPost());
            navigate('/tools', { replace: false });
        } else if (res.status === 406) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 401) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 403) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 412) {
            toast.success(`${res.data.error}`);
            setLoading(false);
        } else {
            toast.success(`something went wrong`);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!categories) {
            dispatch(category.allCategory());
        }
    }, [dispatch, categories]);
    return (
        <Card className="overflow-scroll h-full w-full">
            <div className="my-4 px-0 lg:px-2">
                <h1 className="text-center text-sm lg:text-md py-1 font-semibold uppercase text-white bg-purple-600">
                    Add Tool
                </h1>
                <div className="flex flex-col gap-2 my-4">
                    <Input
                        label="Title"
                        type="text"
                        value={title}
                        name="title"
                        size="lg"
                        onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                    />
                    <Select
                        label="Select Room"
                        value={selectedValue}
                        onChange={(value) => setSelectedValue(value)}
                    >
                        {categories?.data.map((item) => (
                            <Option key={item._id} value={item?._id}>
                                {item?.title}
                            </Option>
                        ))}
                    </Select>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="py-2 px-10 bg-green-600 text-white text-sm uppercase"
                            onClick={categoryHandle}
                        >
                            ADD
                        </button>
                    </div>
                </div>
                {loading && (
                    <div className="flex justify-center pb-5 gap-8">
                        <Spinner color="green" />
                        <p>Please Wait...</p>
                    </div>
                )}
            </div>
        </Card>
    );
}
