import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='display'>
            <div className='text-5xl text-white font-bold text-left pl-10 pt-20'>
                <h1>Welcome to the <span className='text-purple-900'>Super Tutor </span> site. <br /> Probably a best <br /> learing environment. </h1>
            </div>
            <div className='pl-10 mt-5'>
                <button className='btn btn-primary'>Explore</button>
            </div>
        </div>
    );
};

export default Banner;