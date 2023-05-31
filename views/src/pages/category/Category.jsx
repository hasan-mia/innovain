import { Card, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ['Serial', 'Name', 'Action'];

const TABLE_ROWS = [
    {
        serial: 1,
        name: 'John Michael',
        action: 'renter',
    },
    {
        serial: 1,
        name: 'John Michael',
        action: 'renter',
    },
    {
        serial: 1,
        name: 'John Michael',
        action: 'renter',
    },
    {
        serial: 1,
        name: 'John Michael',
        action: 'renter',
    },
    {
        serial: 1,
        name: 'John Michael',
        action: 'renter',
    },
];

export default function Category() {
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
                        {TABLE_ROWS.map(({ serial, name, action }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {serial}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue"
                                            className="font-medium"
                                        >
                                            {action}
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
