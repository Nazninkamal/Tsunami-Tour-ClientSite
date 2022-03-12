import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'
const Package = ({pac}) => {
    const { _id, name, img,shortdescription, duration, reviews} = pac;
    return (
        <Card className = " rounded-3 mt-5" style={{ width: '22rem' }}>
        <Card.Img className='imgg' variant="top" src={img} />
        <Card.Body className="text-xl-start">
         <div className='d-flex justify-content-between mb-3'>
           <h6>{reviews}</h6>
           <h6>{duration} days</h6>
         </div>
         <h5>{name}</h5>
         <p>Famous for: {shortdescription}</p>
         <div className='d-flex justify-content-center'>
          <Link to={`/packegeDetails/${_id}`}><Button className='allbutton'>View More Details</Button></Link>
      </div>
        </Card.Body>
      </Card>
    );
};

export default Package;