import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('https://shielded-dawn-26233.herokuapp.com/services', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="add-service ">
        <h1 className='d-flex justify-content-center hedding2'>Add Tour Packeges</h1>
           <form onSubmit={handleSubmit(onSubmit)} >
             
      <textarea {...register("name")} placeholder="Name"/>
      <textarea {...register("reviews")} placeholder="Reviews"/>
      <textarea {...register("session")} placeholder="Session"/>
      <textarea {...register("description")}  placeholder="Description"z/>
      <textarea {...register("shortdescription")}  placeholder="Short Description"/>
      <textarea {...register("duration")}  placeholder="duration"/>
      <textarea type="number" {...register("price")} placeholder="Total-Cost"/>
      <textarea {...register("img")} placeholder="img url"/>
      < input className="m-2 btn text-white w-50 mx-auto d-block" style={{ 'backgroundColor': '#c13f22' }} type="submit" value="Add Review" />
    </form>
        </div>
    );
};

export default AddService;