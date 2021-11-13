import React from 'react';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://stormy-ridge-19844.herokuapp.com/userinfo/admin', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount) {
                    alert('Admin created');
                    reset();
                }
            })
    }
    

    return (
        <>
            
            <div className="mb-5 mt-5">
                <h3 className="text-center pt-5">Make A User As Admin</h3>
                <div className="container form-content">
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-1">
                        <label>User Email</label>
                        <input {...register("email", { required: true })} />
                        {errors?.email && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;