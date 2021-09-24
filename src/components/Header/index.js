import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './style.css';
const Header = () => {
  const username=useSelector(state=>state.username);
  console.log("username Header  : "+username);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">

        <Link className="navbar-brand brand-txt text-size" to="/">Alumni Management System</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end mr-5 mx-5 text-size" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active nav-txt" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-txt" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-txt" to="/events">Events</Link>
            </li>
            
            {username?<li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle nav-txt" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Jobs</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/add-jobs">Add Jobs</Link></li>
                <li><Link className="dropdown-item" to="/view-jobs">View Jobs</Link></li>

              </ul>
            </li>:null}
            <li className="nav-item">
              <Link className="nav-link nav-txt" to="/gallery">Gallery</Link>
            </li>
            {username?<li className="nav-item">
              <Link className="nav-link nav-txt" to="/profile">Profile</Link>
            </li>:null}
           {username?<li className="nav-item">
              <Link className="nav-link nav-txt" to="/logout">Logout</Link>
            </li>:<li className="nav-item">
              <Link className="nav-link nav-txt" to="/login">Login</Link>
            </li>}
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Header;