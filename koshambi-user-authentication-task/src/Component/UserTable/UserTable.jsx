import React, { useEffect, useState } from 'react';

const UserTable = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://koshambi-user-authentication-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    return (
        <div className='mt-8'>
            <table>
                <thead className='text-left'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userData.map(data =>
                            <>
                                <tr className='p-8'>
                                    <td className='pr-10 py-4'>{data.name}</td>
                                    <td className='pr-10 py-4'>{data.email}</td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>
        </div >
    );
};

export default UserTable;