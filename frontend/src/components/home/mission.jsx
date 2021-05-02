import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faThumbsUp, faHandshake } from '@fortawesome/free-solid-svg-icons'
import laptop from '../../images/laptop.jpg';

const Mission = () => {
    return (   
<>        
  {/*fs<!-- mission --> */}
  <section className="p-5 mission">
    <div className="container-fluid">
      {/* <!-- title--> */}
      <div className="row text-center text-white">
        <div className="col m-4">
          <h1 className="display-4 mb-4">Our Mission</h1>
          <div className="underline mb-4"></div>
          <p className="lead">To provide a world className full stack development experience for our clients</p>
        </div>
      </div>
      {/* <!-- end of title--> */}

      <div className="row my-5">
        {/* <!-- small and extra small break on larger take on 1/3 of entire row-->
        <!-- col --> */}
        <div className="col-md-4 text-center">
          <FontAwesomeIcon icon={faCogs} size="5x" className="text-danger mb-4"/> 
          <h1 className="text-white mb-3">Creativity</h1>
          <p className="text-muted">I am not bound by the conventional - I see to explore new ways of producing an
            outstanding product with just a supcon of conventionality to draw users in --- and then Wow them with our
            uniqueness
          </p>
        </div>
        {/* <!-- end col -->
        <!-- col --> */}
        <div className="col-md-4 text-center">
           <FontAwesomeIcon icon={faThumbsUp} size="5x" className="text-danger mb-4"/> 
          <h1 className="text-white mb-3">Quality</h1>
          <p className="text-muted">I do not take shortcuts and focus on clean, scalable, reliable code that not only does
            the job : the code does the job well</p>
        </div>
        {/* <!-- end col -->
        <!-- col --> */}
        <div className="col-md-4 text-center">
          <FontAwesomeIcon icon={faHandshake} size="5x" className="text-danger mb-4"/> 
          <h1 className="text-white mb-3">Experience</h1>
          <p className="text-muted">Being a little older developer, I have many years experience and can be relied on as
            your trusty development partner.
          </p>
        </div>
        {/* <!-- end col --> */}
      </div>
    </div>

    {/* <!-- next --> */}
    <div className="container-fluid">
      <div className="row">
        {/* <!-- first column --> */}
        <div className="col-lg-5 text-center">
            <img alt="Laptop" src={laptop} width="350" className="img-fluid rounded camera-img"/>
        </div>
        {/* <!-- end first column -->

        <!-- second column --> */}
        <div className="col-lg-7 text-white text-lg-right text-center mission-text">
          <h1>We know what to do</h1>
          <p>We are full stack developers with experience in website design (HTML and CSS), website integration
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
</>
 );
}
 
export default Mission;