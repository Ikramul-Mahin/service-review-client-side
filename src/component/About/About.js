import React from 'react';

const About = () => {
    return (
        <div className='text-center bg-base-200'>
            <div className='my-6'>
                <h2 className='text-5xl'>About Me</h2>
                <hr className='mx-40 font-semibold' />
            </div>
            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className=''>
                        <img src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>

                    <div className='w-6/12'>


                        <h1 className="text-5xl font-bold">Mahin Islam</h1>
                        <p className="py-6">I am student of Science background. I love to teach students. I take good Care of my students. I make them confident and qualified. </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;