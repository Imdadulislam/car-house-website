import React from 'react';
import Footer from '../../Footer/Footer';
import Reviews from '../../Reviews/Reviews';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;