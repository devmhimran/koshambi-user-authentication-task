import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mx-auto flex justify-center items-center'>
            <div className="home-content">
            <h1 className='font-bold text-4xl text-center lg:text-6xl'>Welcome to our website!</h1>
            <div  className='text-center mt-10'>        
                <Link className='border-2 border-black text-black font-semibold hover:text-white hover:bg-black px-6 lg:px-8 py-3 lg:py-4' to='/login'>Please Log in</Link>   
            </div>
            </div>
        </div>
    );
};

export default Home;