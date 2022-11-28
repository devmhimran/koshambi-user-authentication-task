import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/task__login.gif'
import auth from '../firebase.init';
import useHook from '../Hook/useHook';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let loginError;
    const [userDetail] = useHook(gUser);
    if (error) {
        loginError = error.message;
    }
    let from = location.state?.from?.pathname || "/profile";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    return (
        <div className='card bg-white border w-4/5 md:w-6/12 lg:w-[750px] shadow rounded-lg'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="login__image lg:flex items-center p-8 md:hidden hidden">
                    <div className="login__content">
                        <h2 className='font-extrabold text-[#262524] text-4xl capitalize mb-6 leading-snug'>Welcome to the login page</h2>
                        <p>Please enter your username and password to login. If you do not have a login, please sign up for one. Thank you for using our service.</p>
                    </div>
                </div>
                <div className="login__input border-l p-7">
                    <h2 className='text-center font-semibold text-2xl mb-8'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="w-full py-4">
                            <Input type="email" label="Email" name='email' required />
                        </div>
                        <div className="w-full py-4">
                            <Input type="password" label="Password" name='password' required />
                            <Link to='/forgot-password'><small className='text-blue-400'>Forget password?</small></Link>
                            <small className='text-red-500 block'>{loginError}</small>
                        </div>
                        <div className="w-full py-4">
                            <Button type='submit' fullWidth>Login</Button>
                        </div>
                    </form>
                    <div>
                        <hr className='py-2' />
                        <div className="googleLogin">
                            <Button fullWidth onClick={handleGoogleLogin}>Google Login</Button>
                        </div>
                    </div>
                    <div className="create__account mt-3">
                        <p className='text-base'>Not registered? <Link className='text-blue-400' to='/registration'>Create New one</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;