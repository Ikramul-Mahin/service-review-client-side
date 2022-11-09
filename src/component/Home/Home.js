import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Galary from '../Galary/Galary';
import Service from '../Subjects/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Galary></Galary>
        </div>
    );
};

export default Home;