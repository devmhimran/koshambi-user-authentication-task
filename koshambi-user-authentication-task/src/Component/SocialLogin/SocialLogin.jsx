import { Button } from '@material-tailwind/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/profile";
    if (user) {
        navigate(from, { replace: true });
        console.log(user)
    }
    
    return (
        <div>
            <hr className='py-2' />
            <div className="googleLogin">
                <Button fullWidth onClick={handleGoogleLogin}>Google Login</Button>
            </div>
        </div>
    );
};

export default SocialLogin;