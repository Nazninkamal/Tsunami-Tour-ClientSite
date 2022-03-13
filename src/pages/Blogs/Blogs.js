import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
   
  } from "@fortawesome/free-brands-svg-icons";
  

const Blogs = ({blog}) => {
    const {_id, name, img, email, nameText, titleText, blogText, reviewNumber, date} = blog;
    return (
        <div className='row m-'>
            <div className='col-lg-4 col-md-3 col-sm-12 mb-5'>
               <img src={img} style={{objectFit:'cover',  height:320, width:"100%"}} alt="" />
           </div>

           <div className='col-lg-8 col-md-8 col-sm-12 text-lg-start'>
               
               <h4>{nameText}</h4>
               <h5>{titleText}</h5>
               <div className='d-flex justify-content-between'>
              <p>{name}</p>
               <p>{email}</p>
               <FontAwesomeIcon icon="fa-solid fa-star" />
              </div>
               <p>{blogText}</p>
             
              <div className='d-flex justify-content-between'>
              <p>Review: {reviewNumber} Star</p>
               <p>Date: {date}</p>
               <div className=" d-flex text-center">
                   <div style={{color:"red", fontSize:30}}>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="iconn mx-3"  style={{color:"blue", fontSize:30}}>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div style={{color:"red", fontSize:30}}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="iconn mx-3"  style={{color:"blue", fontSize:30}}>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div> 
                </div>
              </div>
            
           </div>
        </div>
    );
};

export default Blogs;