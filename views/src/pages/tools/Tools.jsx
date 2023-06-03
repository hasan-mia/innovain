/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Card, Spinner, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import { LuPower, LuPowerOff } from 'react-icons/lu';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../redux/api/auth';
import post from '../../redux/api/post';

const TABLE_HEAD = ['Serial', 'Name', 'Action', 'Status'];

export default function Tools() {
    const { posts, isLoading } = useSelector((state) => state.post);
    const { users, userInfo, isAdmin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const user = users?.find((item) => item._id === userInfo?.userId);
    // handle switch
    const handleSwitch = async (status, id, name) => {
        if (status === 1) {
            const data = {
                isAdmin,
                status,
                type: user?.type,
            };
            const res = await post.switchStatus(data, id);
            if (res.status === 200) {
                toast.success(`${name} On`);
                dispatch(post.allPost());
            } else {
                toast.error(`${res.data.error}`);
            }
        }

        if (status === 0) {
            const data = {
                isAdmin,
                status,
                type: user?.type,
            };
            const res = await post.switchStatus(data, id);
            if (res.status === 200) {
                toast.success(`${name} OFF`);
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
        if (!users) {
            dispatch(auth.allUser());
        }
    }, [posts, users, dispatch]);

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
                {(isAdmin || user?.type === 1 || user?.status === 1) && (
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
                        {posts?.map((item, index) => (
                            <tr key={item._id} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {index + 1}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {item.title}
                                    </Typography>
                                </td>
                                {isAdmin || user?.type === 1 || user?.status === 1 ? (
                                    <td className="p-4">
                                        <div className="flex gap-3">
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
                                        </div>
                                    </td>
                                ) : (
                                    <td className="p-4">
                                        <div className="flex gap-3 text-red-500">
                                            <p>You are not permitted</p>
                                        </div>
                                    </td>
                                )}
                                {isAdmin || user?.type === 1 || user?.status === 1 ? (
                                    <td className="p-4">
                                        <div className="flex gap-3">
                                            {item.status === 0 ? (
                                                <button
                                                    type="button"
                                                    className="text-green-500"
                                                    onClick={() =>
                                                        handleSwitch(1, item._id, item.title)
                                                    }
                                                >
                                                    <LuPower />
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="text-red-500"
                                                    onClick={() =>
                                                        handleSwitch(0, item._id, item.title)
                                                    }
                                                >
                                                    <LuPowerOff />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                ) : (
                                    <td className="p-4">
                                        <div className="flex gap-3 text-red-500">
                                            <p>You are not permitted</p>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
