import { Card, Spinner, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import category from '../../redux/api/category';

const TABLE_HEAD = ['Serial', 'Name', 'Action'];

export default function Category() {
    const { categories, isLoading } = useSelector((state) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!categories) {
            dispatch(category.allCategory());
        }
    }, [dispatch, categories]);
    console.log(categories);
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
                <Link
                    to="/room/add"
                    className="my-1 p-1 text-sm rounded-sm bg-green-600 text-white uppercase"
                >
                    ADD room
                </Link>
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
                        {categories?.data.map((item, index) => {
                            const isLast = index === categories.data.length - 1;
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
                                            {item.title}
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
