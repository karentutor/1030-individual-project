import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
          <footer className="bg-dark px-5">
    <div className="container-fluid">
      <div className="row text-light py-4">
        <div className="col-lg-4 col-sm-6">
          <h5 className="pb-3">About Us</h5>
          <p className="small">We are full stack developers with experience in website design (HTML and CSS), website integration
            (Javascript, Jquery) with Database support (MongooseDB, MariaDB and MySQL), website servers
            (NGINX, Apache) and website hosting (Linux) 
          </p>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h5 className="pb-3">Visit Us</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="footer-link">Home</Link >
            </li>
            <li>
              <Link to="/resume" className="footer-link">Resume</Link >
            </li>
            <li>
              <Link to="/portfolio" className="footer-link">Portfolio</Link >
            </li>
            <li>
              <Link to="contact_us" className="footer-link">Contact</Link >
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h5 className="pb-3">Need Help?</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="footer-link text-uppercase">Customer Service</Link >
            </li>
            <li>
              <Link to="#" className="footer-link text-uppercase">Online Chat</Link >
            </li>
            <li>
              <Link to="#" className="footer-link text-uppercase">Support</Link >
            </li>
            <li>
              <Link to="#" className="text-info">contact@kruecode.com</Link >
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-6">
          <h5 className="pb-3">Stay Connected</h5>
          <p className="small">Drop us your email to learn more and to stay in touch!</p>
          <form className="mb-3">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Email Address"/>
              <div className="input-group-append">
                <button type="button" className="btn bg-danger text-white text-uppercase font-weight-bold">Sign Up</button>
              </div>
            </div>
          </form>
          <ul className="list-inline">
            <li className="list-inline-item"><i className="fab fa-facebook-square fa-2x text-primary"></i></li>
            <li className="list-inline-item"><i className="fab fa-google-plus fa-2x text-danger"></i></li>
            <li className="list-inline-item"><i className="fab fa-instagram fa-2x text-danger"></i></li>
            <li className="list-inline-item"><i className="fab fa-twitter fa-2x text-info"></i></li>
            <li className="list-inline-item"><i className="fab fa-youtube fa-2x text-danger"></i></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center text-light border-top pt-3">
          <p>&copy; 2021 Copyright, All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
     );
}
 
export default Footer;