/* eslint-disable import/no-extraneous-dependencies */
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Spinner,
    Typography,
} from '@material-tailwind/react';

export default function SingIn({
    authController,
    setType,
    credentialHandler,
    email,
    pass,
    handleSignIn,
    loading,
}) {
    return (
        <Card className="w-96">
            {/* card header */}
            <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                    Sign In
                </Typography>
            </CardHeader>
            {/* card body */}
            <CardBody className="flex flex-col gap-4">
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    name="email"
                    size="lg"
                    onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                />
                <Input
                    label="Password"
                    type="password"
                    value={pass}
                    name="password"
                    size="lg"
                    onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                />
            </CardBody>
            {/* card footer */}
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth onClick={handleSignIn}>
                    Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Dont have an account?
                    <Typography
                        as="button"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                        onClick={() => authController(setType('signup'))}
                    >
                        Sign up
                    </Typography>
                </Typography>
            </CardFooter>
            {loading && (
                <div className="flex justify-center pb-5 gap-8">
                    <Spinner color="green" />
                    <p>Please Wait...</p>
                </div>
            )}
        </Card>
    );
}
