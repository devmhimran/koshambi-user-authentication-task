import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import UserTable from '../UserTable/UserTable';

const Profile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const handleLogOut = () =>{
        signOut(auth);
    }
    return (
        <div className='container mx-auto flex justify-center items-center'>
            <div className="profile__content p-10 lg:p-0">
                <h2 className='text-2xl lg:text-5xl font-bold'>Profile</h2>
                <h3 className='capitalize text-xl lg:text-3xl font-semibold my-3'>Name: {displayName}</h3>
                <p className='text-xl lg:text-3xl font-semibold'>Your Email: {email}</p>
                <div className="logout__btn mt-6">
                    <button className='border-2 border-black text-black font-semibold hover:text-white hover:bg-black px-6 lg:px-8 py-2' onClick={handleLogOut}>Logout</button>
                </div>
                <UserTable/>
            </div>
        </div>
    );
};

export default Profile;