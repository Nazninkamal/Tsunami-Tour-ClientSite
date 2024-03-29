import React from 'react';
import './Popular.css'
import { Card, CardGroup, Container } from 'react-bootstrap';
import img1 from "../../../images/popular-service/tokyo.jpg"
import img2 from "../../../images/popular-service/seoul.jpg"
import img3 from "../../../images/popular-service/paris .jpg"
import img4 from "../../../images/popular-service/london.jpg"

const Popular = () => {
    return (
    <Container>
          <div className='my-5 '>
        <h2 className='hedding2 d-flex justify-content-center'>Popular Destinations</h2>
        <h6 className='hedding2 d-flex justify-content-center mb-5'>World's best tourist destinations</h6>

        <CardGroup >
  <Card className='galleryImg'>
   <div style={{overflow:"hidden"}}>
   <Card.Img
    height={300}
    variant="top" src={img1} />
   </div>
    
    <div className='team '>
  <h4 className='d-flex justify-content-center mt-3'>Tokyo</h4>
   
  </div>
  </Card>

  <Card className='ms-3 galleryImg'>
  <div style={{overflow:"hidden"}}>
   <Card.Img
    height={300}
    variant="top" src={img2} />
   </div>
    
    <div className='team'>
  <h4 className='d-flex justify-content-center mt-3'>Seoul</h4>
  </div>
  </Card>

  <Card className='ms-3 galleryImg'>
  <div style={{overflow:"hidden"}}>
   <Card.Img
    height={300}
    variant="top" src={img3} />
   </div>
   
    <div className='team'>
  <h4 className='d-flex justify-content-center mt-3'>Paris</h4>
  
  </div>
   
  </Card>

  <Card className='ms-3 galleryImg'>
  <div style={{overflow:"hidden"}}>
   <Card.Img
    height={300}
    variant="top" src={img4}  />
   </div>

  <div className='team'>
  <h4 className='d-flex justify-content-center mt-3'>London</h4>
  </div>

  </Card>
</CardGroup>
        </div>
    </Container>
    );
};

export default Popular;