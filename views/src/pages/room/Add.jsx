import { Card, Input, Spinner } from '@material-tailwind/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import category from '../../redux/api/category';

export default function Add() {
    const { isAdmin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const credentialHandler = (name, data) => {
        if (name === 'title') {
            setTitle(data);
        }
    };

    const categoryHandle = async () => {
        setLoading(true);
        const categoryData = {
            title,
            isAdmin,
        };

        const res = await category.addCategory(categoryData);
        if (res.status === 200) {
            toast.success(`${res.data.message}`);
            setLoading(false);
            dispatch(category.allCategory());
            navigate('/rooms', { replace: false });
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
    return (
        <Card className="overflow-scroll h-full w-full">
            <div className="my-4 px-0 lg:px-2">
                <h1 className="text-center text-sm lg:text-md py-1 font-semibold uppercase text-white bg-purple-600">
                    Add Room
                </h1>
                <div className="flex flex-col gap-2 my-4">
                    <Input
                        label="Title"
                        type="tex"
                        value={title}
                        name="title"
                        size="lg"
                        onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                    />
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
