import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default Home;