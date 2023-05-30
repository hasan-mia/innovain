import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ['Serial', 'Name', 'Status', 'Action'];

const TABLE_ROWS = [
    {
        serial: 1,
        name: 'John Michael',
        status: 'renter',
        job: 'Manager',
    },
    {
        serial: 1,
        name: 'John Michael',
        status: 'renter',
        job: 'Manager',
    },
    {
        serial: 1,
        name: 'John Michael',
        status: 'renter',
        job: 'Manager',
    },
    {
        serial: 1,
        name: 'John Michael',
        status: 'renter',
        job: 'Manager',
    },
    {
        serial: 1,
        name: 'John Michael',
        status: 'renter',
        job: 'Manager',
    },
];

export default function Users() {
    return (
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
                    {TABLE_ROWS.map(({ serial, name, job, status }, index) => {
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
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {status}
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
                                        {job}
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}
