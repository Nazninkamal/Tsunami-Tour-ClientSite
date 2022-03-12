import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Discount = ({discount}) => {
    const {id, name, img,time, price} = discount;
    return (
        <div className="col-lg-4 col-md-4 col-sm-12  mb-5"> 
          <Link to={`/packegeDetails/${id}`} style={{ textDecoration: "none", color:"black" }}>
<div className="card-group">
  <div className="card">
    <img src={img} class="card-img-top" alt="..." style={{objectFit:'cover',  height:200}}/>
    <div className="card-body">
      <h5 className="card-title  d-flex justify-content-center">{name}</h5>
      <p className="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
    <div className='d-flex justify-content-between'>
         <h6>{time}</h6>
         <h6>$ {price}</h6>
      </div>
    </div>
  </div>
  </div>
  </Link>  
        </div>
    );
};

export default Discount;