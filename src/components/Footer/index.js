import './style.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

 function Footer(){

  
     return(
         <>
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-md-4">
            <h3 style={{fontSize:"xx-large", fontWeight:"bold", fontStyle:"italic"}}>Alumni Management System</h3>
            <p className="list-unstyled">
              <li>The Alumni Management System is a simple React/MySQL project that helps a certain university/college school manages its alumni data.</li>
              
            </p>
          </div>
          {/* Column2 */}
          <div className="col-md-4">
            <h4>Quick Access</h4>
            <ul className="list-unstyled">
              <li><Link className="link-txt text-light" to="/">Home</Link></li>
              <li><Link className="link-txt text-light" to="/about-us">About Us</Link></li>
              <li><Link className="link-txt text-light" to="/events">Events</Link></li>
              {/* <li><Link className="link-txt text-light" to="/view-jobs">Jobs</Link></li> */}
              <li><Link className="link-txt text-light" to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><Link className="link-txt text-light" to="/">Emergency Services</Link></li>
              <li><Link className="link-txt text-light" to="/">Emergency Services</Link></li>
              <li><Link className="link-txt text-light" to="/">Emergency Services</Link></li>
              <li><Link className="link-txt text-light" to="/">Emergency Services</Link></li>
            </ul>
          </div>
          
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Alumni Management System | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
         </>
     );
 }
 export default Footer;