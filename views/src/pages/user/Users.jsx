/* eslint-disable no-underscore-dangle */
import { Card, Spinner, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import { FiUserCheck, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useAuthRequire from '../../hooks/useAuthRequire';
import auth from '../../redux/api/auth';

const TABLE_HEAD = ['Serial', 'Name', 'Status', 'Action'];

export default function Users() {
    useAuthRequire();
    const { users, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // handle Status
    const handleStatus = async (status, id) => {
        if (status === 1) {
            const data = {
                isAdmin: true,
                status,
            };
            const res = await auth.updateStatus(data, id);
            if (res.status === 200) {
                toast.success(`Permition granted`);
                dispatch(auth.allUser());
            } else {
                toast.erros(`${res.data.error}`);
            }
        } else {
            const data = {
                isAdmin: true,
                status,
            };
            const res = await auth.updateStatus(data, id);
            if (res.status === 200) {
                toast.success(`Permition removed`);
                dispatch(auth.allUser());
            } else {
                toast.erros(`${res.data.error}`);
            }
        }
    };

    useEffect(() => {
        if (!users) {
            dispatch(auth.allUser());
        }
    }, [users, dispatch]);

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
            <Card className="overflow-scroll h-full w-full my-5">
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
                        {users?.data.map((item, index) => {
                            const isLast = index === users.data.length - 1;
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
                                            {item.email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="h2"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.status === 1 ? (
                                                <span className="text-green-500">
                                                    <FiUserCheck size={20} />
                                                </span>
                                            ) : (
                                                <span className="text-red-500">
                                                    <FiUserMinus size={20} />
                                                </span>
                                            )}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} flex gap-2`}>
                                        <button
                                            type="button"
                                            className="text-green-500"
                                            onClick={() => handleStatus(1, item._id)}
                                        >
                                            <FiUserPlus size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-500"
                                            onClick={() => handleStatus(0, item._id)}
                                        >
                                            <FiUserMinus size={20} />
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
