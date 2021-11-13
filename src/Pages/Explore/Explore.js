import React, { useEffect, useState } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Button, Card, Col, Container, Row, } from 'react-bootstrap';
import cardBg from '../../images/banner/carssssssss.png';
import { Link } from 'react-router-dom';


const Explore = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://stormy-ridge-19844.herokuapp.com/cars')
            .then(res => res.json())
            .then(result => setCars(result))
    }, [])
    return (
        <>
            <NavBar></NavBar>
            <div id="services" className="pt-5" style={{ background: '#F5F5F5' }}>
                <Container>
                    <h2>Explore The Most Popular <span style={{ color: '#F54114' }}>CARS</span></h2>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            cars.map(car => <Col>
                                <Card className="p-2" >
                                    <Card.Img variant="top" src={car.img} />
                                    <Card.Body>
                                        <Card.Title><i className="fas fa-map-marker-alt fs-4 text-secondary"></i>  {car.title}</Card.Title>
                                        <Card.Text>{car.description}</Card.Text>
                                        <h3 style={{ color: '#F54114' }}>Price: ${car.price}</h3>
                                        <Link to={`/purchaseCar/${car._id}`}>
                                            <Button style={{ backgroundColor: '#F54114' }} className="px-5 text-decoration-none " variant="danger">Book Now</Button>
                                        </Link>
                                        <img src={cardBg} style={{ position: 'relative', left: '120px', marginTop: '-100px', width: '100px' }} alt="" />

                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Container>
            </div>
        </>

    );
};

export default Explore;