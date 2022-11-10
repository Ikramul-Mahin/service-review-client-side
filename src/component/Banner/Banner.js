import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='display'>
            <div className='text-5xl text-white font-bold text-left pl-10 pt-20'>
                <h1>Welcome to the <span className='text-amber-600'>Super Tutor </span> site. <br /> Believe in not focus on result<br />but also make qualified a student. </h1>
            </div>
            <div className='pl-10 mt-5'>
                <Link to='/reviews'>
                    <button className='btn btn-primary'>Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;