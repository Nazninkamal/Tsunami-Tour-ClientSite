import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Sidebar from '../Sidebar/Sidebar';
import Blog from '../TravelBlogs/Blog/Blog';





const Home = () => {
    return (
       <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <Sidebar></Sidebar>
         
          <Blog></Blog>
          <Footer></Footer>
      
       </div>    
    );
};

export default Home;