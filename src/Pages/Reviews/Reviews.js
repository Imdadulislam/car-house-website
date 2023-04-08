import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://car-house-server-18lp.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div id="reviews" className="py-5" style={{ background: '#F5F5F5' }}>
            <Container>
                <h2>Cutomar Review and <span style={{ color: '#F54114' }}>Feedback</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        reviews.map(e =>
                            <Col>
                                <Card border="light" style={{ width: 'auto' }}>
                                    <Card.Header style={{ background: '#F54114', color: 'white', fontWeight: 'bold' }}>Ratting: {e.rate}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Customar Name: {e.name}</Card.Title>
                                        <Card.Text>
                                            {e.comments}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;