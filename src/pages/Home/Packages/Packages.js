import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setPackages(data));

    }, [])
    
    return (
        <div id="packages" className=' mx-5 my-5 py-5'>
            
            <h2 className="d-flex justify-content-center hedding2"> Popular Travel Packages</h2>
            <div className="service-container">
            { 
            packages.map(pac => <Package
             key = {pac.id}
             pac= {pac}
             
             ></Package>)
             }
            </div>
            
        </div>
    );
};

export default Packages;