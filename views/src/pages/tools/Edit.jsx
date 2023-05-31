/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { Card } from '@material-tailwind/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
    const { isAdmin, isLogin } = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const categoryHandle = async (data) => {
        setLoading(true);
        const category = {
            title: data.title,
            isAdmin,
        };

        const res = await category.addCategory(category);
        console.log(res);
    };
    return (
        <Card className="overflow-scroll h-full w-full">
            <div className="my-4 px-0 lg:px-2">
                <h1 className="text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600">
                    Edit Category
                </h1>
                <form onSubmit={handleSubmit(categoryHandle)} className="flex flex-col gap-2 my-4">
                    <input
                        type="text"
                        placeholder="Add title"
                        className="p-2"
                        {...register('title')}
                        required
                    />
                    {/* <textarea
                        type="text"
                        rows={6}
                        className="p-4"
                        placeholder="Description"
                        {...register('description')}
                    /> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-reverse gap-2">
                        <button
                            type="button"
                            className="p-2 bg-green-600 text-white text-lg uppercase"
                        >
                            UPDATE
                        </button>
                    </div>
                </form>
            </div>
        </Card>
    );
}
