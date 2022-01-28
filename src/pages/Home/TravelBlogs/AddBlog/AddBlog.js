import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddBlog.css'

const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/blogs', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="add-service">
           <h1>Review Section</h1> 
           <form onSubmit={handleSubmit(onSubmit)} >
      <input defaultValue={user.displayName} {...register("name", { required: true })}/>
      <input defaultValue={user.email} {...register("email", { required: true })}/>
      {/* <input defaultValue={user. photoURL}  {...register("photoURL", { required: true })}/>  */}
      <input {...register("nameText")}  placeholder="Place Name"/>
      <input {...register("titleText")}  placeholder="Title"/>
      <textarea {...register("blogText")}  placeholder="Blog"/>
      <input type="number" {...register("reviewNumber")} placeholder="Review Star"/>
      <input {...register("date")} placeholder="Date"/>

      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddBlog;