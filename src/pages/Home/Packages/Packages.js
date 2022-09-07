import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() =>{
        fetch('https://shielded-dawn-26233.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setPackages(data));

    }, [])
    
    return (
        <div id="packages" className=' mx-5 my-3 '>
            <Container>
            <h2 className="d-flex justify-content-center hedding2"> Popular Travel Packages</h2>
            <div className="service-container">
            { 
            packages.map(pac => <Package
             key = {pac.id}
             pac= {pac}
             
             ></Package>)
             }
            </div>
            </Container>
            
        </div>
    );
};

export default Packages;