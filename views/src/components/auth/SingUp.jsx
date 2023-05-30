/* eslint-disable import/no-extraneous-dependencies */
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Typography,
} from '@material-tailwind/react';

export default function SingUp({ authController, setType, credentialHandler, email, pass }) {
    return (
        <Card className="w-96">
            {/* card header */}
            <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                    Sign Up
                </Typography>
            </CardHeader>
            {/* card body */}
            <CardBody className="flex flex-col gap-4">
                <Input
                    label="Email"
                    value={email}
                    name="email"
                    size="lg"
                    onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                />
                <Input
                    label="Password"
                    value={pass}
                    name="password"
                    size="lg"
                    onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                />
            </CardBody>
            {/* card footer */}
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                    Sign Up
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Allready have an account?
                    <Typography
                        as="button"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                        onClick={() => authController(setType('signin'))}
                    >
                        Sign in
                    </Typography>
                </Typography>
            </CardFooter>
        </Card>
    );
}
