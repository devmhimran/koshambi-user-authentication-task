import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import loginImg from '../../assets/task__login.gif'

const Login = () => {
    return (
        <div className='card border w-7/12 rounded-lg'>
            <div className="grid grid-cols-3 gap-4">
                <div className="login__image flex items-center justify-center py-12 col-span-2">
                    <img className='w-5/12' src={loginImg} alt="" />
                </div>
                <div className="login__input border-l p-7">
                    <h2 className='text-center font-semibold text-2xl mb-8'>Login</h2>
                    <form>
                        <div className="w-full py-4">
                            <Input type="email" label="Email" />
                        </div>
                        <div className="w-full py-4">
                            <Input type="password" label="Password" />
                        </div>
                        <div className="w-full py-4">
                            <Button type='submit' fullWidth>block level button</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;