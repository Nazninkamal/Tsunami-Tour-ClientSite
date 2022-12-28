import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`https://tsunami-tour-serversite.vercel.app/users`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `https://tsunami-tour-serversite.vercel.app/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
           
        })
    }
    return (
        <div>
            <h1 className="d-flex text-align-center">Something went wrong</h1>
            {
                services.map(service => <div className="my-5 bg-light">
                    key={service._id}
                     <h3>{service.name}</h3>
                     <p>{service.email}</p>
                     <p>{service.productName}</p>
                     <p>{service.phoneNumber}</p>
                     <p>{service.cardNumber}</p>
                     
                    <button className="bg-info" onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default MyOrder;