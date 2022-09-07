import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Discount = ({discount}) => {
    const {id, name, img,time, price} = discount;

    return (
        <Col lg={4} md={4} sm={6} xs={12} className="mb-5"> 
          <Link to={`/purchaseBox`} style={{ textDecoration: "none", color:"black" }}>
<div className="card-group">
  <div className="card">
    <img src={img} className="card-img-top" alt="..." style={{objectFit:'cover', height:200, width:"100%"}}/>
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
        </Col>
    );
};

export default Discount;