import React, { useEffect, useState } from 'react';

const ManageAllPurchase = () => {
    const [allPurchases, setAllPurchases] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
        console.log(e.target.value);
    }


    useEffect(() => {
        fetch('https://car-house-server-18lp.onrender.com/perchase/all')
            .then(res => res.json())
            .then(data => setAllPurchases(data))
    }, []);


    const handleUpdate = id => {
        fetch(`https://car-house-server-18lp.onrender.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Approved Your Booking',)
                }
            });
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancel Booking?');
        if (proceed) {
            fetch(`https://car-house-server-18lp.onrender.com/cancelPurchase/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancel SuccessFully');
                        const remainingUsers = allPurchases.filter(cancelPurchase => cancelPurchase._id !== id);
                        setAllPurchases(remainingUsers);
                    }

                });
        }
    }
    return (
        <div>
            <div className="py-5" style={{ background: '#e9f2fa' }}>
                <h2 className="text-secondary text-center">Manage All Booking</h2> <hr />
                {
                    allPurchases.map(e =>

                        <div className="card mb-3 mx-auto" style={{ maxWidth: "48rem" }} key={e?._id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={e?.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{e?.place}</h5>
                                        <p className="card-text"> Name:{e?.name}</p>
                                        <p className="card-text">Email: {e?.email}</p>
                                        <p className="card-text">Date: {e?.date}</p>
                                        <p className="card-text">Description: {e?.Description}</p>
                                        <p className="card-text">Status: {e?.status}</p>


                                        <div className="d-flex justify-content-center gap-lg-4">
                                            <div>
                                                <input onChange={handleStatus} defaultValue={e?.status} className="py-2 text-danger fw-bold border-2  border-warning" type="text" />
                                                <button onClick={() => handleUpdate(e?._id)} className="py-lg-2 mb-lg-1  btn-warning rounded-end px-2 text-white">Submit</button>
                                            </div>


                                            <button onClick={() => handleDelete(e?._id)} className="py-lg-2 mb-lg-1  btn-danger rounded-end px-lg-2 text-white">Cancel Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default ManageAllPurchase;