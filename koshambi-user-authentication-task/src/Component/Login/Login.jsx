import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/task__login.gif'

const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = {
            email,
            password
        }

        console.log(data)
    }
    return (
        <div className='card border w-7/12 rounded-lg'>
            <div className="grid grid-cols-3 gap-4">
                <div className="login__image flex items-center justify-center py-12 col-span-2">
                    <img className='w-5/12' src={loginImg} alt="" />
                </div>
                <div className="login__input border-l p-7">
                    <h2 className='text-center font-semibold text-2xl mb-8'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="w-full py-4">
                            <Input type="email" label="Email" name='email' required/>
                        </div>
                        <div className="w-full py-4">
                            <Input type="password" label="Password" name='password' required/>
                        </div>
                        <div className="w-full py-4">
                            <Button type='submit' fullWidth>Login</Button>
                        </div>
                    </form>
                    <div className="create__account">
                        <p className='text-base'>Not registered? <Link className='text-blue-400' to='/registration'>Create New one</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;