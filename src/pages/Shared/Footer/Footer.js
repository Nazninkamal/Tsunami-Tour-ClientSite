import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from '../../image/born-beauty logo.jpg'
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container ">
        <div className="container mx-5 ">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-start">
                {/* <h1>   <img className='rounded-circle' src={logo} alt="" width="80" height="80"/>BORN BEAUTY</h1> */}
                <div className="icons-container d-flex text-center ">
                   <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div> 
                </div>
                <div>
                    <h6>Email: najninkamalrimi@gmail.com</h6>
                    <h6>Phone: +8801884227177</h6>
                    <h6>Location: Noakhali, Bangladesh</h6>
                  </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container text-start">
                
                  <h3>HELP</h3>
                  <h4 className="footer-menu">Search</h4>
                  <h4 className="footer-menu">Help</h4>
                  <h4 className="footer-menu">Information</h4>
                  <h4 className="footer-menu">Privacy Policy</h4>
                  <h4 className="footer-menu">Shipping Details</h4>
                
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
            <div className="footer-menu-container text-start">
                <h3>Support</h3>
                <h4 className="footer-menu">About Us</h4>
                <h4 className="footer-menu">Careers</h4>
                <h4 className="footer-menu">Deliveries</h4>
                <h4 className="footer-menu">Refund Requests</h4>
                <h4 className="footer-menu">Contact us</h4>
              
            </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
            <div className="footer-menu-container text-start">
                
                <h3>Information</h3>
                <h4 className="footer-menu">Search Terms</h4>
                <h4 className="footer-menu">Advanced Search</h4>
                <h4 className="footer-menu">FAQ & Help Docs</h4>
                <h4 className="footer-menu">Orders & Returns</h4>
                <h4 className="footer-menu">Store Location</h4>
              
            </div>
            
            </div>
           
          </div>
          <h6 className="mt-5">Copyright © 2022, naz-theme | DesignThemes.</h6>
        </div>
        
       
      </div>
      
    </div>
  );
};

export default Footer;