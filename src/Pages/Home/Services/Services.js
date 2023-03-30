import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://car-house-server-imdadulislam.vercel.app/cars')
            .then(res => res.json())
            .then(result => {
                const sliceData = result.slice(0, 6)
                setCars(sliceData);
            })
    }, [])
    return (
        <div id="services" className="py-5" style={{ background: '#F5F5F5', marginTop: '-250px' }}>
            <Container>
                <h2>The Most Popular <span style={{ color: '#F54114' }}>CAR</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        cars.map(car => <Service
                            car={car}
                            key={car.title}
                        >
                        </Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;