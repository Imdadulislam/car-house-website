import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cardBg from '../../../images/banner/carssssssss.png';
import './Service.css';

const Service = (props) => {
    const { _id, title, description, img, price } = props.car;
    return (
        <div>
            <Col>
                <Card className="p-2" style={{ borderTop: "7px solid #F54114" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><i className="fas fa-map-marker-alt fs-4 text-secondary"></i>  {title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <h3 style={{ color: '#F54114' }}>Price: ${price}</h3>
                        <Link to={`/purchaseCar/${_id}`}>
                            <Button className="px-5 text-decoration-none " variant="danger" style={{ backgroundColor: '#F55114' }}>Book Now</Button>
                        </Link>
                        <img src={cardBg} className="card-bg" alt="" />
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;