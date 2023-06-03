/* eslint-disable no-nested-ternary */
import {
    Badge,
    Button,
    Card,
    Collapse,
    IconButton,
    Navbar,
    Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { MdClose, MdNotifications } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/slice/AuthSlice';

export default function Header() {
    const { socket } = useSelector((state) => state.socket);
    const { isAdmin, isLogin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openNav, setOpenNav] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        socket?.on('getToolNotification', (data) => {
            setNotifications((prev) => [...prev, data]);
        });
    }, [socket]);
    const handleRead = () => {
        setNotifications([]);
        setOpen(false);
    };
    // handle logout
    const handleLogout = () => {
        dispatch(logOut());
    };

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);
    // displya notification
    const displayNotification = ({ senderEmail, text }) => (
        <Card className="w-full">
            <div className="flex flex-col p-1 border-2">
                <Typography variant="small" color="blue-gray">
                    {senderEmail}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {text}
                </Typography>
            </div>
        </Card>
    );

    // Navlist for admin
    const adminNavlist = () => (
        <>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/" className="flex items-center uppercase">
                    Home
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/dashboard" className="flex items-center uppercase">
                    Dashboard
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/users" className="flex items-center uppercase">
                    Users
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/rooms" className="flex items-center uppercase">
                    Room
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/tools" className="flex items-center uppercase">
                    Tools
                </Link>
            </Typography>
        </>
    );
    // Navlist for users
    const userNavlist = () => (
        <>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/" className="flex items-center uppercase">
                    Home
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/dashboard" className="flex items-center uppercase">
                    Dashboard
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/tools" className="flex items-center uppercase">
                    Tools
                </Link>
            </Typography>
        </>
    );

    // Navlist for users
    const commonNavlist = () => (
        <>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/" className="flex items-center uppercase">
                    Home
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/dashboard" className="flex items-center uppercase">
                    Dashboard
                </Link>
            </Typography>
        </>
    );

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {isLogin && isAdmin
                ? adminNavlist()
                : isLogin && !isAdmin
                ? userNavlist()
                : commonNavlist()}
        </ul>
    );

    return (
        <Navbar className="mx-auto py-2 lg:py-4 rounded-none shadow-none border-b-2 border-b-blue-gray-50">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link to="/" className="text-blue-500 font-bold">
                    INNOVAINFO
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div className="relative hidden lg:block">
                    <Badge content={notifications?.length || 0}>
                        <Button onClick={() => setOpen(!open)}>
                            <MdNotifications />
                        </Button>
                    </Badge>
                    {open && (
                        <div className="absolute">
                            {notifications?.map((n) => displayNotification(n))}
                            <Button onClick={handleRead}>Mark read</Button>
                        </div>
                    )}
                </div>
                <div className="hidden lg:inline-block">
                    {isLogin ? (
                        <Button
                            variant="gradient"
                            size="sm"
                            fullWidth
                            className="mb-2"
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </Button>
                    ) : (
                        <Button
                            variant="gradient"
                            size="sm"
                            fullWidth
                            className="mb-2"
                            onClick={() => navigate('/auth')}
                        >
                            LOGIN
                        </Button>
                    )}
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? <MdClose className="text-2xl" /> : <HiBars3 className="text-2xl" />}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div>
                        <Badge content={notifications?.length || 0}>
                            <Button onClick={() => setOpen(!open)}>
                                <MdNotifications />
                            </Button>
                        </Badge>
                        {open && (
                            <div className="absolute">
                                {notifications?.map((n) => displayNotification(n))}
                                <button type="button" onClick={handleRead}>
                                    Mark as read
                                </button>
                            </div>
                        )}
                    </div>
                    {isLogin ? (
                        <Button
                            variant="gradient"
                            size="sm"
                            fullWidth
                            className="mb-2"
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </Button>
                    ) : (
                        <Button
                            variant="gradient"
                            size="sm"
                            fullWidth
                            className="mb-2"
                            onClick={() => navigate('/auth')}
                        >
                            LOGIN
                        </Button>
                    )}
                </div>
            </Collapse>
        </Navbar>
    );
}
