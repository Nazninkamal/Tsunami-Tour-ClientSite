import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Discounts from '../Discounts/Discounts';
import NewsLetter from '../NewsLetter/NewsLetter';
import Packages from '../Packages/Packages';
import Popular from '../Popular/Popular';



const Home = () => {
    return (
       <div>
          
          <Navigation></Navigation>
          <Banner></Banner>
          <Popular></Popular>
          <Packages></Packages>
          <Discounts></Discounts> 
         <Contact></Contact>
         {/* <NewsLetter></NewsLetter> 
         */}
       
          <Footer></Footer>
      
       </div>    
    );
};

export default Home;