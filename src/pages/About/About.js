import React from 'react';
import { Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import vid1 from "../../images/vid-1.mp4";
import vid2 from "../../images/vid-2.mp4";
import p1 from "../../images/Screenshot_2.png"
import p2 from "../../images/Screenshot_3.png"
import p3 from "../../images/Screenshot_5.png"
import './About.css'
import team1 from "../../images/pic1.png"
import team2 from "../../images/pic2.png"
import team3 from "../../images/pic3.png"
import team4 from "../../images/pic4.png"
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Testimonials from '../Home/Testimonials/Testimonials';

const About = () => {
    return (
       
        <div className='banner'>
 <Navigation/>
        <Carousel fade controls={false}
            style={{ "marginTop": "-10px" }}
        >

            <Carousel.Item >
                <video controls
                    className="d-block w-100"
                    src={vid1}
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-content'>
                    <h1>About Us</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <video controls
                    className="d-block w-100 "
                    src={vid2}
                    alt="Second slide"
                />

                <Carousel.Caption className='carousel-content'>
                    <h1>About Us</h1>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>

       
        <div>

 {/* why choose us */}

            <h2  className='my-5 pt-5 d-flex justify-content-center hedding2'>Why Choose Us</h2>
  
       <Container>
       <Row >
    <Col  className='sadow m-3 ' >
        
       
        <img className='d-block m-auto my-3'  src={p1} alt="" />
       
        <h3 className='my-3 d-flex justify-content-center'>Perfect Planning</h3>
        <h6 className='mb-5 mx-3'>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!</h6>
     
        </Col>
    <Col  className='sadow  m-3'>
   
        <img  className='d-block m-auto my-3' src={p2} alt="" />
       
        <h3 className='my-3 d-flex justify-content-center'>Secure Venues</h3>
        <h6 className='mb-5 mx-3'>We work hard to secure the best hotel rates in the most popular destinations. Search and book adventure tours now!</h6>
    </Col>
    <Col  className='sadow  m-3'>
        <img  className='d-block m-auto my-3' src={p3} alt="" />
      
        <h3 className='my-3 d-flex justify-content-center'>Beautiful Memories</h3>
        <h6 className='mb-5 mx-3'>Book international vacation packages with us and create memories that will last a lifetime! Create History !</h6>
    </Col>
  </Row>
       </Container>
        </div>
     
     
     {/* our team */}
     <h3  className='my-5 pt-5 d-flex justify-content-center hedding2'>Our Team</h3>
       
     <div>
     <CardGroup>
  <Card className='ms-5'>
    <Card.Img variant="top" src={team1} />
    
    <div className='team'>
  <h4 className='d-flex justify-content-center mt-3'>Petar parker</h4>
   <h5 className='d-flex justify-content-center '>Tour Advisor</h5>
  </div>
  </Card>

  <Card className='ms-3'>
    <Card.Img variant="top" src={team2} />
    
    <div className='team'>
  <h4 className='d-flex justify-content-center mt-3'>Baker Jonson</h4>
   <h5 className='d-flex justify-content-center '>Tour Advisor</h5>
  </div>
  </Card>

  <Card className='ms-3'>
    <Card.Img variant="top" src= {team3}/>
   
    <div className='team'>
  <h4 className='d-flex justify-content-center mt-3'>Tania Taha</h4>
   <h5 className='d-flex justify-content-center '>Tour Advisor</h5>
  </div>
   
  </Card>

  <Card className='ms-3 me-5'>
    <Card.Img variant="top" src={team4} />

  <div className='team'>
  <h4 className='d-flex justify-content-center mt-3'>Jonson Max</h4>
   <h5 className='d-flex justify-content-center '>Tour Advisor</h5>
  </div>

  </Card>
</CardGroup>
     </div>

    
   <Testimonials></Testimonials>
           <Footer/>
        </div>

 
    );
};

export default About;