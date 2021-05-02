import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faThumbsUp, faHandshake } from '@fortawesome/free-solid-svg-icons'
import laptop from '../images/laptop.jpg';

class Body extends Component {
    
  state = {}
    
  render() {
  return (
            

<body>

  {/* <!-- header--> */}
  <header>
    {/* <!-- navbar -->
    <!-- navbar -expand lag makes it long and flat when largger and bigger otherwsie hamburger -->
    <!--fixed top for fixed at the top --> */}
    <nav classNameName="navbar navbar-expand-lg fixed-top custom-navbar">
      <NavLink classNameName="navbar-brand text-light text-uppercase "><span classNameName="h2 font-weight-bold">karen</span><span
          classNameName="h1">k</span></NavLink >
      <button classNameName="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#myNavbar">

        <div classNameName="bg-light line1"></div>
        <div classNameName="bg-light line2"></div>
        <div classNameName="bg-light line3"></div>

      </button>

      {/* <!-- start by putting on the right hand side by justify-contnet-end--> */}

      <div classNameName="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="myNavbar">

        <ul classNameName="navbar-nav">

          {/* <!-- create space around each other with mr-2 and make it menu-item--> */}
          <li classNameName="nav-item"><NavLink href="index.html" classNameName="nav-NavLink nav-active mr-2 menu-item">Home</NavLink ></li>
          <li classNameName="nav-item"><NavLink href="resume.html" classNameName="nav-NavLink mr-2 menu-item">Resume</NavLink ></li>
          <li classNameName="nav-item"><NavLink href="portfolio.html" classNameName="nav-NavLink mr-2 menu-item">Portfolio</NavLink ></li>
          <li classNameName="nav-item"><NavLink href="contact_us.html" classNameName="nav-NavLink mr-2 menu-item">Contact</NavLink ></li>

        </ul>
      </div>
    </nav>
    {/* <!-- end of navbar  -->

    <!-- banner ---->

    <!-- banner text--> */}
    <div classNameName="text-light text-md-right text-center banner">
      <h1 classNameName="display-4 banner-heading">Roaring into the Future <span></span><span classNameName="display-3"></span>
      </h1>
      <p classNameName="lead banner-par">Karen K - Full Stack Web Developer</p>
    </div>
    {/* <!-- end of banner text-->

    <!-- end of banner ----> */}

  </header>
  {/* <!-- end of header -->*/}


  {/*fs<!-- mission --> */}
  <section classNameName="p-5 mission">
    <div classNameName="container-fluid">
      {/* <!-- title--> */}
      <div classNameName="row text-center text-white">
        <div classNameName="col m-4">
          <h1 classNameName="display-4 mb-4">My Mission</h1>
          <div classNameName="underline mb-4"></div>
          <p classNameName="lead">To provide a world classNameName full stack development experience for my clients</p>
        </div>
      </div>
      {/* <!-- end of title--> */}

      <div classNameName="row my-5">
        {/* <!-- small and extra small break on larger take on 1/3 of entire row-->
        <!-- col --> */}
        <div classNameName="col-md-4 text-center">
          <FontAwesomeIcon icon={faCogs} size="5x" classNameName="text-danger mb-4"/> 
          <h1 classNameName="text-white mb-3">Creativity</h1>
          <p classNameName="text-muted">I am not bound by the conventional - I see to explore new ways of producing an
            outstanding product with just a supcon of conventionality to draw users in --- and then Wow them with our
            uniqueness
          </p>
        </div>
        {/* <!-- end col -->
        <!-- col --> */}
        <div classNameName="col-md-4 text-center">
           <FontAwesomeIcon icon={faThumbsUp} size="5x" classNameName="text-danger mb-4"/> 
          <h1 classNameName="text-white mb-3">Quality</h1>
          <p classNameName="text-muted">I do not take shortcuts and focus on clean, scalable, reliable code that not only does
            the job : the code does the job well</p>
        </div>
        {/* <!-- end col -->
        <!-- col --> */}
        <div classNameName="col-md-4 text-center">
          <FontAwesomeIcon icon={faHandshake} size="5x" classNameName="text-danger mb-4"/> 
          <h1 classNameName="text-white mb-3">Experience</h1>
          <p classNameName="text-muted">Being a little older developer, I have many years experience and can be relied on as
            your trusty development partner.
          </p>
        </div>
        {/* <!-- end col --> */}
      </div>
    </div>

    {/* <!-- next --> */}
    <div classNameName="container-fluid">
      <div classNameName="row">
        {/* <!-- first column --> */}
        <div classNameName="col-lg-5 text-center">
            <img src={laptop} width="350" classNameName="img-fluid rounded camera-img"/>
        </div>
        {/* <!-- end first column -->

        <!-- second column --> */}
        <div classNameName="col-lg-7 text-white text-lg-right text-center mission-text">
          <h1>I know what to do</h1>
          <p>I a full stack developer with experience in website design (HTML and CSS), website integration
            (Javascript, Jquery) with Database support (MongooseDB, MariaDB and MySQL), website servers
            (NGINX, Apache)
            and website hosting (Linux) </p>
        </div>
        {/* <!-- end of second column --> */}
      </div>
    </div>
    {/* <!-- end of next --> */}
  </section>
  {/* <!-- end of mission--> */}
  <footer classNameName="bg-dark px-5">
    <div classNameName="container-fluid">
      <div classNameName="row text-light py-4">
        <div classNameName="col-lg-4 col-sm-6">
          <h5 classNameName="pb-3">About Us</h5>
          <p classNameName="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nobis dicta molestiae id
            laboriosam natus repudiandae, ducimus illum veritatis perspiciatis possimus, at facere debitis accusantium?
          </p>
        </div>
        <div classNameName="col-lg-2 col-sm-6">
          <h5 classNameName="pb-3">Visit Us</h5>
          <ul classNameName="list-unstyled">
            <li>
              <NavLink href="index.html" classNameName="footer-NavLink">Home</NavLink >
            </li>
            <li>
              <NavLink href="resume.html" classNameName="footer-NavLink">Resume</NavLink >
            </li>
            <li>
              <NavLink href="portfolio.html" classNameName="footer-NavLink">Portfolio</NavLink >
            </li>
            <li>
              <NavLink href="contact_us.html" classNameName="footer-NavLink">Contact</NavLink >
            </li>
          </ul>
        </div>
        <div classNameName="col-lg-2 col-sm-6">
          <h5 classNameName="pb-3">Need Help?</h5>
          <ul classNameName="list-unstyled">
            <li>
              <NavLink href="#" classNameName="footer-NavLink text-uppercase">Customer Service</NavLink >
            </li>
            <li>
              <NavLink href="#" classNameName="footer-NavLink text-uppercase">Online Chat</NavLink >
            </li>
            <li>
              <NavLink href="#" classNameName="footer-NavLink text-uppercase">Support</NavLink >
            </li>
            <li>
              <NavLink href="#" classNameName="text-info">photox@email.com</NavLink >
            </li>
          </ul>
        </div>
        <div classNameName="col-lg-4 col-sm-6">
          <h5 classNameName="pb-3">Stay Connected</h5>
          <p classNameName="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus dolores iste
            praesentium assumenda est quia accusantium corrupti ipsam inventore.</p>
          <form classNameName="mb-3">
            <div classNameName="input-group">
              <input type="text" classNameName="form-control" placeholder="Email Address"/>
              <div classNameName="input-group-append">
                <button type="button" classNameName="btn bg-danger text-white text-uppercase font-weight-bold">Sign Up</button>
              </div>
            </div>
          </form>
          <ul classNameName="list-inline">
            <li classNameName="list-inline-item"><i classNameName="fab fa-facebook-square fa-2x text-primary"></i></li>
            <li classNameName="list-inline-item"><i classNameName="fab fa-google-plus fa-2x text-danger"></i></li>
            <li classNameName="list-inline-item"><i classNameName="fab fa-instagram fa-2x text-danger"></i></li>
            <li classNameName="list-inline-item"><i classNameName="fab fa-twitter fa-2x text-info"></i></li>
            <li classNameName="list-inline-item"><i classNameName="fab fa-youtube fa-2x text-danger"></i></li>
          </ul>
        </div>
      </div>
      <div classNameName="row">
        <div classNameName="col text-center text-light border-top pt-3">
          <p>&copy; 2020 Copyright, All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>


</body>


        );
    }
}

export default Body;