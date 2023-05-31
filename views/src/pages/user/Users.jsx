import { Card, Spinner, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../redux/api/auth';

const TABLE_HEAD = ['Serial', 'Name', 'Status', 'Action'];

export default function Users() {
    const { users, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

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
                                <tr key={item.id}>
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
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.status === 1 ? 'Access' : 'No Access'}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} flex gap-2`}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue"
                                            className="font-medium"
                                        >
                                            Edit
                                        </Typography>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue"
                                            className="font-medium"
                                        >
                                            Delete
                                        </Typography>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue"
                                            className="font-medium"
                                        >
                                            Status
                                        </Typography>
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
