/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Card, Spinner, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import post from '../../redux/api/post';

const TABLE_HEAD = ['Serial', 'Name', 'Action', 'Switch'];

export default function Tools() {
    const { posts, isLoading } = useSelector((state) => state.post);
    const { isAdmin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    // handle switch
    const handleSwitch = async (status, id) => {
        if (status === 1) {
            const data = {
                isAdmin,
                status,
                type: 1,
            };
            const res = await post.switchStatus(data, id);
            if (res.status === 200) {
                toast.success(`Permition granted`);
                dispatch(post.allPost());
            } else {
                toast.error(`${res.data.error}`);
            }
        } else {
            const data = {
                isAdmin: true,
                status,
                type: 1,
            };
            const res = await post.switchStatus(data, id);
            if (res.status === 200) {
                toast.success(`Permition removed`);
                dispatch(post.allPost());
            } else {
                toast.error(`${res.data.error}`);
            }
        }
    };

    // handle Delete
    const handleDelete = async (id) => {
        const data = {
            isAdmin,
        };
        const res = await post.deletePost(data, id);
        if (res.status === 200) {
            toast.success(`${res.data.message}`);
            dispatch(post.allPost());
        } else {
            toast.erros(`${res.data.error}`);
        }
    };
    useEffect(() => {
        if (!posts) {
            dispatch(post.allPost());
        }
    }, [posts, dispatch]);

    if (isLoading) {
        return (
            <div className="flex justify-center py-5 gap-8">
                <Spinner color="green" />
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-end">
                {isAdmin && (
                    <Link
                        to="/tool/add"
                        className="my-1 p-1 text-sm rounded-sm bg-green-600 text-white uppercase"
                    >
                        ADD Tools
                    </Link>
                )}
            </div>
            <Card className="overflow-scroll h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {posts?.data?.map((item, index) => {
                            const isLast = index === posts.data.length - 1;
                            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                            return (
                                <tr key={item._id}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {index + 1}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item?.title}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} flex gap-2`}>
                                        <button type="button" className="text-green-500">
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-500"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            <MdDelete />
                                        </button>
                                        <button type="button" className="text-green-500">
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-500"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                    <td className={`${classes} flex gap-2`}>
                                        <button type="button" className="text-green-500">
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-500"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            <MdDelete />
                                        </button>
                                        <button type="button" className="text-green-500">
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-500"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
