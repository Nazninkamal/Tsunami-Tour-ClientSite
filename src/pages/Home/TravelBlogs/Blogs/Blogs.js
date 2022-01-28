import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Blogs = ({product}) => {
    const {  nameText,titleText,blogText,reviewNumber,date} = product;
  

    return (
   
      <div className=' mx-5  px-5'>
      <h3>{nameText}</h3>
           <h4>{titleText}</h4>
           <h6>{blogText}</h6>
           <p>Review: {reviewNumber}</p>
           <p>Date: {date}</p>
      </div>
  
           
         
 
      
    );
};

export default Blogs;