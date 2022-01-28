import React from 'react';
import './Sidebar.css'
import img from "../../../images/Screenshot_3.png"
import img1 from "../../../images/blogs/Alaska.jpg"
import img2 from "../../../images/blogs/Belize.jpg"
import img3 from "../../../images/blogs/maui.jpg"
import img4 from "../../../images/blogs/Paris.jpg"
import img5 from "../../../images/blogs/Tahiti.jpg"
import img6 from "../../../images/blogs/tokiyo.jpg"
const Sidebar = () => {
    return (
        <div>
           <div className="container-fluid">
    <div className="row min-vh-100 flex-column flex-md-row">
      <aside className="col-12 col-md-3 col-xl-2 p-0 bg-dark ">
        <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top " id="sidebar">
          <div className="text-center p-3">
          <img src={img} alt="profile picture" className="img-fluid  my-4 p-1 d-none d-md-block shadow"/> 
           <a href="#" className="navbar-brand mx-0 font-weight-bold  text-nowrap" >Top-Rated Spots</a>
          </div>
              <button type="button" className="navbar-toggler border-0 order-1" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse order-last" id="nav">
            <ul className="navbar-nav flex-column w-100 justify-content-center">
            {/* <li className="nav-item">
              <a href="#" className="nav-link active"> Edit Profile</a>
            </li> */}
            
          
            <li className="nav-item">
              <a href="#" className="nav-link"> Alaska </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">  Belize </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> Paris</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> Maui</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> Tokyo</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> Tahiti </a>
            </li>
          </ul>
          </div>      
        </nav>   
      </aside>
      <main className='col px-0 flex-grow-1 '>
          <div className='container py-3'>
            
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
  <div className="col">
    <div className="card">
      <img src={img1}className="card-img-top" 
      height={320}
      alt="..."/> 
      <div className="card-body">
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img2} className="card-img-top" 
        height={320}
        alt="..."/>
      <div className="card-body">
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img3} className="card-img-top"
      
      height={320}
      alt="..."/>
      <div className="card-body">
     
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img4} className="card-img-top"
        height={320}
      alt="..."/>
      <div className="card-body">
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img5} className="card-img-top"
        height={320}
      alt="..."/>
      <div className="card-body">
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img6} className="card-img-top" 
        height={320}
      alt="..."/>
      <div className="card-body">
        
      </div>
    </div>
  </div>
</div>
          
          </div>
      </main>
    </div>
  </div>

        </div>
    );
};

export default Sidebar;