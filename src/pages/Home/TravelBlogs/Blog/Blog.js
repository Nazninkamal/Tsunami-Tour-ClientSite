import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const Blog = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, [])
    return (
        <div id="packages">
            <h3 className="my-5 mx-5 px-5">Blogs <span className="color">Reviews</span> </h3>
           <div className="service-container">
            { 
            products.map(product =><Blogs
                key = {product.id}
                product = {product}
            ></Blogs>)
             }
             </div>
            
            
        </div>
    );
};

export default Blog;