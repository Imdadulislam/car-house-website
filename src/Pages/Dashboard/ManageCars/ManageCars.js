import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://car-house-server-18lp.onrender.com/cars')
            .then(res => res.json())
            .then(result => setCars(result))
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to Delete This Car?');
        if (proceed) {
            fetch(`https://car-house-server-18lp.onrender.com/deleteCar/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted SuccessFully');
                        const remainingUsers = cars.filter(deleteCar => deleteCar._id !== id);
                        setCars(remainingUsers);
                    }

                });
        }
    }
    return (
        <>
            <div id="services" className="pt-5" style={{ background: '#F5F5F5' }}>
                <Container>
                    <h2>Explore The Most Popular <span style={{ color: '#F54114' }}>CARS</span></h2>

                    {
                        cars.map(car =>
                            <div className="card mb-3 mx-auto" style={{ maxWidth: "48rem", borderTop: "5px solid #F54114" }} key={car?._id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={car?.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{car?.title}</h5>
                                            <p className="card-text">{car?.description}</p>
                                            <p className="card-text">Price: ${car?.price}</p>


                                            <button onClick={() => handleDelete(car?._id)} className="btn btn-danger">Delete This Car</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </Container>
            </div>
        </>

    );
};

export default ManageCars;