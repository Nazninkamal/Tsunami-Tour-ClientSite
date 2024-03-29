import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Navigation from '../Shared/Navigation/Navigation';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('https://tsunami-tour-serversite.vercel.app/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data));

    }, [])
    
    return (
      <>
      <Navigation/>
      <SharedBanner pageName={"Top 10 travel spots in the world"} />
        <div id="blog" className=' mx-5 mt-5'>
            
           
            <div >
            { 
            blogs.map(blog => <Blogs
             key = {blog.id}
             blog= {blog}
             
             ></Blogs>)
             }
            </div>
            
        </div>
      </>
    );
};

export default Blog;