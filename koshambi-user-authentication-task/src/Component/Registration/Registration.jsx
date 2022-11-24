import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import registerImg from '../../assets/login__img.png'

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleRegister = (data) => {
        // e.preventDefault();
        console.log(data)
    }

    return (
        <div className='card border w-5/12 rounded-lg'>
            <div className="grid grid-cols-2 gap-4">
                <div className="register__image flex items-center px-8 py-12">
                    {/* <img className='w-5/12' src={registerImg} alt="" /> */}
                    <div className="register__form__content">
                        <h2 className='font-bold text-4xl capitalize mb-6'>Welcome to our registration page!</h2>
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

                            {errors.rePassword?.type === 'required' && <small className='text-red-500'>{errors.rePassword?.message}</small>}
                            {errors.rePassword?.type === 'minLength' && <small className='text-red-500'>{errors.rePassword?.message}</small>}
                        </div>
                        <div className="w-full py-3">
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100"
                                {
                                ...register('profileImage', {
                                    required: {
                                        value: true,
                                        message: "Profile image required"
                                    }
                                })
                                }
                            />
                            {errors.profileImage?.type === 'required' && <small className='text-red-500'>{errors.profileImage?.message}</small>}
                        </div>
                        <div className="w-full py-4">
                            <Button type='submit' fullWidth>register</Button>
                        </div>
                    </form>
                    <div className="create__account">
                        <p className='text-base'>Not registered? <Link className='text-blue-400' to='/registration'>Create New one</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;