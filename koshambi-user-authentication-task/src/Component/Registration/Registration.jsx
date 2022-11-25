import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import registerImg from '../../assets/login__img.png'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);
    const [photoImg, setPhotoImg] = useState('');
    const [passError, setPassError] = useState('');
    const imageApi = 'ef367f576eca302d4916e3889c6e0cc6';
    let pwdError;

    const handleRegister = async (data) => {

        const name = data.name;
        const email = data.email;
        const password = data.password;
        const reTypePassword = data.rePassword;

        if (password !== reTypePassword) {
            pwdError = "Password doesn't match"
            setPassError(pwdError);
        } else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });;
            await sendEmailVerification();
        }


    }
    // console.log(error, profileError, emailError, user, photoImg)
    // console.log(error.message)

    return (
        <div className='card bg-white border w-4/5 md:w-6/12 lg:w-5/12 shadow rounded-lg'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="register__image lg:flex items-center p-8 md:hidden hidden">
                    <div className="register__form__content">
                        <h2 className='font-extrabold text-[#262524] text-4xl capitalize mb-6 leading-snug'>Welcome to our registration page!</h2>
                        <p>
                            We are excited to have you as a member of our community. To get started, please fill out the form below.
                            Once you have completed the form, you will be able to access all of our features and services.
                            We can't wait to get to know you better!</p>
                    </div>
                </div>
                <div className="register__input border-l p-7">
                    <h2 className='text-center font-semibold text-2xl mb-8'>Register</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="w-full py-4">
                            <Input type="text" label="Name" name='name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name Required"
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "Enter valid name"
                                    }

                                })}
                            />

                            {errors.name?.type === 'required' && <small className='text-red-500'>{errors.name?.message}</small>}
                            {errors.name?.type === 'pattern' && <small className='text-red-500'>{errors.name?.message}</small>}
                        </div>
                        <div className="w-full py-4">
                            <Input type="text" label="Email" name='email'
                                {...register("email", {
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Provide a valid email"
                                    },

                                    required: {
                                        value: true,
                                        message: "Email required"
                                    }
                                })

                                }
                            />
                            {errors.email?.type === 'required' && <small className='text-red-500'>{errors.email?.message}</small>}
                            {errors.email?.type === 'pattern' && <small className='text-red-500'>{errors.email?.message}</small>}
                        </div>

                        <div className="w-full py-4">
                            <Input type="password" label="Password" name='password'
                                {
                                ...register('password', {
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters' // JS only: <p>error message</p> TS only support string
                                    },
                                    required: {
                                        value: true,
                                        message: "Password required"
                                    }
                                })
                                }
                            />
                            {errors.password?.type === 'required' && <small className='text-red-500'>{errors.password?.message}</small>}
                            {errors.password?.type === 'minLength' && <small className='text-red-500'>{errors.password?.message}</small>}
                        </div>
                        <div className="w-full py-4">
                            <Input type="password" label="Re-type Password" name='rePassword'
                                {
                                ...register('rePassword', {
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters' // JS only: <p>error message</p> TS only support string
                                    },
                                    required: {
                                        value: true,
                                        message: "Re-type password required"
                                    }
                                })
                                }
                            />

                            {
                                errors.rePassword?.type === 'required' && <small className='text-red-500'>{errors.rePassword?.message}</small>
                                && <small className='text-red-500'>{passError}</small>
                            }
                            {errors.rePassword?.type === 'minLength' && <small className='text-red-500 block'>{errors.rePassword?.message}</small>
                               
                            }
                            {passError ? <><small className='text-red-500'>{passError}</small></> : ''}
                            {error ? <><small className='text-red-500'>{error.message}</small></> : ''}
                           
                        </div>
                        <div className="w-full py-4">
                            <Button type='submit' fullWidth>register</Button>
                        </div>
                    </form>
                    <div className="create__account">
                        <p className='text-base'>Already have account? <Link className='text-blue-400' to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;