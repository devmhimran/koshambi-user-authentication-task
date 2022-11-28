import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useHook = (user, name) => {
    const [userDetail, setUserDetail] = useState('');
    const email = user?.user?.email;
     const displayName = user?.user?.displayName;
     const currentUser = {
        name: name,
        email: email
    }
    console.log(name)
    
    useEffect(() => {
    if (email) {
        fetch(`https://koshambi-user-authentication-server.vercel.app/users/${email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
}, [user])
    return userDetail
};

export default useHook;