import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from "../../../images/Journey-amico.png"
import PurchaseBox from '../../PurchaseBox/PurchaseBox';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const DiscountBooking = () => {
  
    return (
        <div style={{backgroundColor: "black", height: "100vh"}}>
        <Navigation/>
        
      
        <Container >
            <Row className='m-0 p-0'>
            <Col className="xs-12 sm-6 md-6 mt-5">
            <img src={img} alt=""/>
            </Col>

            <Col className="xs-12 sm-6 md-6 mt-5">
            <PurchaseBox/>
            
            </Col>
        </Row>
        </Container>
        <Footer/>
        </div>
    );
};

export default DiscountBooking;