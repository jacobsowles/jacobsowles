import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@jacobsowles/ui';

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
            Sign Up
        </Button>
    );
};

export { SignupButton };