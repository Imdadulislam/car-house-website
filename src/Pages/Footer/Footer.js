import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section id="footer-area">
                <div className="container">
                    <div className="footer-area">
                        <h1>CarHouse.co</h1>
                        <div className="footer-icon">
                            <Link to="#"><i className="fab fa-facebook-f ficon"></i></Link>
                            <Link to="#"><i className="fab fa-twitter ficon"></i></Link>
                            <Link to="#"><i className="fab fa-instagram ficon"></i></Link>
                            <Link to="#"><i className="fab fa-linkedin-in ficon"></i></Link>
                            <Link to="#"><i className="fab fa-google-plus-g ficon"></i></Link>
                        </div>
                        <p>Travel makes one modest. You see what a tiny place you occupy in the world.</p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="copyright">
                        <p>Copyright all right reserved | <a href="https://www.facebook.com/iisotan">Creat by Imdadul Islam </a></p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;