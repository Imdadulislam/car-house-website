import React from 'react';
import './Banner.css';
import { Link, } from 'react-router-dom';
import bg from '../../../images/banner/banner-02-c.jpg';
import car from '../../../images/banner/banner-03.png';
import tyre from '../../../images/banner/carssssssss.png'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <div className="container">
                <div className="banner">
                    <div className="banner-content">
                        <h1>Travel</h1>
                        <h1>Helping You To Choose To The Right <span className="vehicles-text">Vehicles</span></h1>
                        <Link to="/explore"><Button className="button">Explore More</Button></Link>
                        <img className="banner-tyre img-fluid" src={tyre} alt="" />
                    </div>
                    <div className="banner-content ">
                        <img className="banner-bg" src={bg} alt="" />
                        <img className="banner-car" src={car} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;