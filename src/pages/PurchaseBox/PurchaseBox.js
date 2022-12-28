import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './PurchaseBox.css'

const PurchaseBox = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
  const onSubmit = data => {
    console.log(data);

    axios.post('https://tsunami-tour-serversite.vercel.app/purchase', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="purchase mt-5 rounded-3">
        <h4 className='d-flex justify-content-center hedding2 py-3' style={{color:"wheat"}}>Book this tour</h4>
        <form onSubmit={handleSubmit(onSubmit)} >
      <input defaultValue={user.displayName} {...register("name", { required: true })}className="form-control"/>
      <input defaultValue={user.email}  {...register("email", { required: true })} className="form-control"/> 
      
      <input type="number" {...register("phoneNumber")} placeholder="Number" className="form-control"/>
      <input type="text" {...register("placeName")} placeholder="Place Name" className="form-control"/>
      <input type="date" className="form-control" id="date" />
      <textarea type="text" {...register("message")} placeholder="Type your Message" className='rounded-3 area ps-2' style={{border:"none"}} />
     
      
      
      <input type="submit" className="w-70 btn-3 my-3 hedding2 mb-3" />
    </form>
        </div>
    );
};

export default PurchaseBox;