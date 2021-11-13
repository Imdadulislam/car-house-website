import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Mypurchase = () => {
    const { user } = useAuth();
    const [myorders, setMyorders] = useState([]);


    useEffect(() => {
        fetch(`https://stormy-ridge-19844.herokuapp.com/perchase/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to cancel Purchase?');
        if (proceed) {
            fetch(`https://stormy-ridge-19844.herokuapp.com/cancelPurchase/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancel SuccessFully');
                        const remainingUsers = myorders.filter(cancelBooking => cancelBooking._id !== id);
                        setMyorders(remainingUsers);
                    }

                });
        }
        console.log(id);
    }
    return (
        <div>
            <div className="py-5" style={{ background: '#e9f2fa' }}>
                <h2 className="text-secondary text-center">My Purchase</h2> <hr className="w-25 mx-auto" />
                {
                    myorders?.map(purchase =>

                        <div className="card mb-3 mx-auto" style={{ maxWidth: "48rem" }} key={purchase?._id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={purchase?.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">

                                    <div className="card-body">
                                        <h5 className="card-title text-info fs-4">{purchase?.place}</h5>
                                        <p className="card-text text-secondary fs-5">Name: {purchase?.name}</p>
                                        <p className="card-text text-secondary">Email: {purchase?.email}</p>
                                        <p className="card-text text-secondary">Booking Code: {purchase?._id}</p>
                                        <p className="card-text text-secondary">Status: {purchase?.status}</p>
                                        <div >
                                            <button onClick={() => handleDelete(purchase?._id)} className="btn btn-danger px-5">Cancel purchase</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div >
    );
};

export default Mypurchase;