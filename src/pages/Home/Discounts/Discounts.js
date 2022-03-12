import React from 'react';
import Discount from '../Discount/Discount';
import discount1 from '../../../images/g-1.jpg'
import discount2 from '../../../images/g-2.jpg'
import discount3 from '../../../images/g-3.jpg'
import discount4 from '../../../images/g-4.jpg'
import discount5 from '../../../images/g-5.jpg'
import discount6 from '../../../images/g-6.jpg'
const discounts = [
    {
        id: 1,
        img:discount1,
        name:"Goa to London",
        time: "5 days",
        price:950,
        dis:60
    },
    {   id:2,
        img:discount2,
        name:"Mumbai to Shimla",
        time:" 4 days",
        price:950,
        dis:50
    },
    {
        id:3,
        img:discount3,
        name:"Manali to Goa",
        time: "6 days",
        price:950,
        dis:20
    },
    {
        id:4,
        img:discount4,
        name:"Mumbai to Chandigarh",
        time: "3 days",
        price:950,
        dis:70
    },
    {
        id:5,
        img:discount5,
        time: "7 days",
        name:"Dhaka to Darjiling",
        price:950,
        dis:40
    },

    {
        id:6,
        img:discount6,
        name:"Dhaka to Sylet",
        time: "5 days",
        price:450,
        dis:31
    }

]

const Discounts = () => {
    
    return (
        <div id="discounts" className="row mx-5 my-5 py-5">
           
       <div className="">
       <h2 className='d-flex justify-content-center hedding2'>Top Discount Activities</h2>
         
           </div>
           <div className="row my-5">
          {
              discounts.map(discount => <Discount
              key={discount.name}
              discount = {discount}
              ></Discount>)
          }
           </div>
           
        </div>
    );
};

export default Discounts;