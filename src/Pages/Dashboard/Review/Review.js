import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import './Review.css'

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://stormy-ridge-19844.herokuapp.com/review', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Review DOne');
                    reset();
                }
            })
    }

    return (
        <div className="review-conatiner">
                <h3 className="text-center pt-5">Review and Feedback</h3>
            <div className="container form-content">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-1">
                    <label>Customer Name</label>
                    <input className="mb-3" defaultValue={user?.displayName} {...register("name")} />
                    <label>Ratting Service</label>
                    <input className="mb-3" {...register("rate")} defaultValue="  /5" />
                    <label>Comment Here</label>
                    <textarea className="mb-3 mt-0 w-100" {...register("comments", { required: true })} placeholder="comments" />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;