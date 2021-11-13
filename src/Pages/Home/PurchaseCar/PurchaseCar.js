import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import NavBar from '../../Shared/NavBar/NavBar';
import carpic from '../../../images/banner/banner-03.png';
import tyrepic from '../../../images/banner/carssssssss.png';
import { useForm } from 'react-hook-form';
import './Purchanse.css';

const PurchaseCar = () => {

    // --------------------------

    const banner = {
        width: '120px',
    };

    // ------------------------------

    const { perchaseId } = useParams();
    const { user } = useAuth();
    const [perchase, setPerchase] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://stormy-ridge-19844.herokuapp.com/cars/${perchaseId}`)
            .then(res => res.json())
            .then(data => setPerchase(data))
    }, [perchaseId]);


    const onSubmit = data => {
        data.status = "Pending";
        console.log(data);
        fetch('https://stormy-ridge-19844.herokuapp.com/perchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Car Perchase Successfully');
                    reset();
                }
            })
    }

    return (
        <>
            <NavBar></NavBar>

            <div className="d-lg-flex justify-content-between pt-5" style={{ backgroundColor: '#F7F8FA', height: '220px' }}>
                <h1 style={{ margin: 'auto', fontSize: '62px' }}>Perchase Your Dream <span style={{ margin: 'auto', color: '#F54114', fontSize: '62px' }}>Car</span></h1>
                <img className="img-fluid" src={carpic} alt="" />
                <img style={banner} src={tyrepic} alt="" />
            </div>

            <div className="d-lg-flex justify-content-center ">
                <div className="">
                    <h1>{perchase.title}</h1>
                    <img src={perchase.img} alt="" />
                    <div>

                    </div>
                </div>
                <div className="">
                    <form className="booking-form mb-5" onSubmit={handleSubmit(onSubmit)}>

                        <h3 style={{ color: '#F54114', fontWeight: 'bold', backgroundColor: 'white' }}>Fillup & Submit Your Info For Perchase Your Dream Car!</h3>

                        <input name="name" defaultValue={user.displayName} {...register("name")} />
                        <input name="email" defaultValue={user.email} {...register("email", { required: true })} />
                        <input defaultValue={perchase.title} {...register("place", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input defaultValue={perchase.img} {...register("image")} />
                        <input
                            type="date"{...register("date", { valueAsDate: true, })} />
                        <input placeholder="Phone" defaultValue="" {...register("Phone")} />
                        <textarea placeholder="Descrive" defaultValue="" {...register("Description")} />

                        <input className="booked-button" type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
};

export default PurchaseCar;