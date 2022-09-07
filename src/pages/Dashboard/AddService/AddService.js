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
             
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" {...register("name")} placeholder="Name"/>
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" {...register("reviews")} placeholder="Reviews"/>
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" {...register("session")} placeholder="Session"/>
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" {...register("description")}  placeholder="Description"z/>
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" {...register("shortdescription")}  placeholder="Short Description"/>
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" {...register("duration")}  placeholder="duration"/>
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" type="number" {...register("price")} placeholder="Total-Cost"/>
      <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" {...register("img")} placeholder="img url"/>
      < input className="m-2 btn text-white w-50 mx-auto d-block" style={{ 'backgroundColor': '#c13f22' }} type="submit" value="Add Review" />
    </form>
        </div>
    );
};

export default AddService;