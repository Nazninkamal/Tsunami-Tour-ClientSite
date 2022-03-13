import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import {Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';




const Contact = () => {
    const { register } = useForm();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c5vzzio', 'template_qwjun09', e.target, 'user_zZphiMGynpKAggEL5e2A5')
        .then((result) => {
            alert('Message sent successfully!');
          }, (error) => {
            alert(error.message);
          });
        e.target.reset();
      };

    return (
        <div className="about-container back-ground " id='contact'>
             
             <h1  className='d-flex justify-content-center hedding2'>Contact Me</h1>
           
            <Row className='m-0'>
                <Col xs={12} md={5} lg={5} className=' info mt-5 mx-auto'>
                <div className="contacts__social text-lg-start mt-5 ">
                   <div className='ms-3'>
                   <h6>DON'T BE SHY !</h6>
                   <p>Feel free to get in touch with me. </p>
                   </div>
                <h5><i className="fa fa-street-view  ms-3"></i> Location: Noakhali, Bangladesh</h5>
                <br />
                <h5><i className="fa fa-phone ms-3"></i> Phone: +8801884227177</h5>
                <h5>
                <br />
                 <a href=" mailto:najninkamalrimi@gmail.com" target="_blank"><i className="fa fa-envelope ms-3"></i> Gmail</a>
           <a href=" https://join.skype.com/invite/y42RQ3v0PIdT" target="_blank">  <i className="fa fa-skype ms-5"></i> Skype</a>
           <br /> <br />
            <a href=" https://github.com/Nazninkamal" target="_blank"><i className="fa fa-github ms-3"></i> GitHub</a>
           <a href=" https://www.linkedin.com/in/naznin-kamal/" target="_blank">  <i className="fa fa-linkedin-square ms-4"></i> Linkedin</a>
           <br /><br />
           <a href=" https://www.facebook.com/nazninkamalrimi" target="_blank"><i className="fa fa-facebook-square ms-3" ></i> Facebook</a>
           <a href=" https://www.instagram.com/nazninrimi/" target="_blank">  <i className="fab fa-instagram ms-3"></i> Instagram</a>
                 </h5>
                </div>
          
             
                    {/* <img className="img-fluid image-about" src={hii} alt="" /> */}
                </Col>
                <div className="col-md-6 col-lg-6 col-sm-12 mt-5 mx-auto" data-aos="fade-down-left">
                        <div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="">

                                    <input {...register("name")} placeholder="  Your Name" className="back-ground contact-size w-100" required /> <br />

                                    <input  {...register("email", { required: true })} placeholder="  Your Email" className=" back-ground  contact-size w-100 my-3" required />  <br />

                                    <input  {...register("subject", { required: true })} placeholder="  Subject" className=" back-ground  contact-size w-100 my-3" required />  <br />
                                  


                                    <textarea {...register("message", { required: true })} placeholder=" Write your Message" className=" back-ground  contact-size w-100 my-3" required />
                                   
                                    
                                    <input type="submit" className="w-100 allbutton contact-size my-3" />


                                </div>


                            </form>

                        </div>
                    </div>
                
            </Row>
        </div>
    );
};

export default Contact;