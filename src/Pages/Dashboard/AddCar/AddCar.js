import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://car-house-server-imdadulislam.vercel.app/cars', {
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
                    alert('Service Added SuccessFully');
                    reset();
                }
            })
    }
    return (
        <div className="NewService-container">
            <form onSubmit={handleSubmit(onSubmit)} className="NewService-form mb-5">
                <h3 className="text-dark">Add New Car</h3>
                <input {...register("title")} placeholder="title" />
                <input {...register("price")} placeholder="Price" />
                <input {...register("fuel")} placeholder="Fuel" />
                <input {...register("topSpeed")} placeholder="Top Speed" />
                <textarea {...register("description")} placeholder="description" />
                <input {...register("image")} placeholder="Image URL" />
                <input type="submit" className="Add-button" />
            </form>
        </div>
    );
};

export default AddCar;