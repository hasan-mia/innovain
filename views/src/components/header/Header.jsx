import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    const dispatch = useDispatch();
    const { logOut } = useSelector((state) => state.auth);
    const [openNav, setOpenNav] = useState(false);
    // handle logout
    const handleLogout = () => {
        dispatch(logOut());
    };

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/" className="flex items-center uppercase">
                    Users
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/" className="flex items-center uppercase">
                    Category
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/" className="flex items-center uppercase">
                    Tools
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto py-2 lg:py-4 rounded-none shadow-none border-b-2 border-b-blue-gray-50">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <Link to="/">INNOVAINFO</Link>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden lg:inline-block">
                    <Button variant="gradient" size="sm">
                        LOGOUT
                    </Button>
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
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button
                        variant="gradient"
                        size="sm"
                        fullWidth
                        className="mb-2"
                        onClick={handleLogout}
                    >
                        LOGOUT
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}
