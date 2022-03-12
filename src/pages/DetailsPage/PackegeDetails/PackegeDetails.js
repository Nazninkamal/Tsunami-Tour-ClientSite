import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PurchaseBox from '../../PurchaseBox/PurchaseBox';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const PackegeDetails = () => {
    const {packegesId} = useParams()
    const [packege, setPackege] = useState({})
    useEffect(() =>{
        fetch(`http://localhost:5000/services/${packegesId}`)
        .then((res) => res.json())
          .then((data) => setPackege(data))
    } , [])
   

    return (
        <div>
        <Navigation/>
          <SharedBanner pageName={packege.name} />
          <Container>
          <Row className='my-5 '>
             <Col sm={12} md={7} lg={7}>
                 <div className='d-flex justify-content-between mb-3 '>
                 <h3>{packege.name}</h3>
                 <h3>$ {packege.price}</h3>
                 </div>
               <img className='mb-5' style={{ width: 650, height: 450,objectFit: "cover"}} src={packege.img} alt="" />

               <h3  className='mt-3'>Session</h3>
              
               <h6>{packege.session}</h6>
               <h3 className='mt-3'>Description</h3>
               <hr />
               <p>{packege.description}</p>
               
             </Col>
             <Col sm={12} md={5} lg={5}>
             <PurchaseBox/>
             </Col>
          </Row>
          </Container>
        <Footer/>
        </div>
    );
};

export default PackegeDetails;