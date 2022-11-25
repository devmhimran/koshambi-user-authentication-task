import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div className='container text-center'>
            <div className="card w-96 border border-dashed border-gray-400 mx-auto">
                <div className="card-body py-5">
                    <p>Your email is not verified</p>
                    <p>Please verify your email</p>
                    <button className='resendBtn mt-3 text-blue-400' onClick={async () => {
                        await sendEmailVerification();
                        toast.success('Sent Email');
                    }}>Resend</button>
                    <small className='block mt-4' disabled={true}>Note: If you not get this email, <br /> please check your spam box</small>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>;
    }
    return children;

};

export default RequireAuth;