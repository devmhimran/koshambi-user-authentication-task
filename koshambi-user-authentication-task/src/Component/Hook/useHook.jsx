import React, { useState } from 'react';

const useHook = (user) => {
    const [userDetail, setUserDetail] = useState('');
    console.log(user)
    return userDetail
};

export default useHook;