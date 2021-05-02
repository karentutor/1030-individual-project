import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Prices = () => {

    const buttonStyle = {
	backgroundColor: '#f5593d',
	width: '130px',
	borderRadius: '25px',
	boxShadow: '5px 8px 18px #000',
    transition: 'all 0.2s',
   
    }
    
    return (
    <React.Fragment>
        {/*  <!--pricing -->*/}
    <section class="bg-light text-center p-5">

        {/* <!-- start of container --> */}
        <div class="container-fluid">

            {/* <!-- title--> */}
            <div class="row text-center text-muted">
                <div class="col m-4">
                    <h1 class="display-4 mb-4">Our Portfolio</h1>
                    <div class="underline-dark mb-4"></div>
                    <p class="lead">Projects and Pricing</p>
                </div>
            </div>
            {/* <!-- end of title--> */}

            <div class="row">
                {/* <!-- start col --> */}
                <div class="col-lg-4">
                    {/* <!-- start card1 --> */}
                    <div class="card card-1 text-light py-4 my-4">
                        <div class="card-body">
                            <h5 class="text-uppercase font-weight-bold mb-5">WordPress</h5>
                            <h1 class="display-4"><FontAwesomeIcon icon={faDollarSign}/>250</h1>
                            <ul class="list-unstyled">
                                <li class="font-weight-bold py-3">HTML</li>
                                <li class="font-weight-bold py-3">CSS</li>
                            </ul>
                            <button className="btn p-2 text-uppercase font-weight-bold text-light price-card-button"
                                style={ buttonStyle }
                            ><Link style={{ color: 'white', textDecoration: 'none' }} to="#">More</Link></button>
                        </div>
                    </div>
                    {/* <!-- end card1 --> */}
                </div>
                {/* <!-- end col -->

                <!-- start col --> */}
                <div class="col-lg-4">
                    {/* <!-- start card2 --> */}
                    <div class="card card-2 text-light py-4 my-4">
                        <div class="card-body">
                            <h5 class="text-uppercase font-weight-bold mb-5">Full Website</h5>
                            <h1 class="display-4"><FontAwesomeIcon icon={faDollarSign}/>500</h1>
                            <ul class="list-unstyled">
                                <li class="font-weight-bold py-3">HTML</li>
                                <li class="font-weight-bold py-3">CSS</li>
                                <li class="font-weight-bold py-3">Graphic Design</li>
                                <li class="font-weight-bold py-3">MERN Stack</li>
                                <li class="font-weight-bold py-3">Login / Logout / Basic Orders</li>
                            </ul>
                            <button className="btn p-2 text-uppercase font-weight-bold text-light price-card-button"
                                style={ buttonStyle }
                            ><Link style={{ color: 'white', textDecoration: 'none' }} to="#">More</Link></button>
                        </div>
                    </div>
                    {/* <!-- end card2 --> */}
                </div>
                {/* <!-- end col --> */}


                {/* <!-- start col --> */}
                <div class="col-lg-4">
                    {/* <!-- start card3 --> */}
                    <div class="card card-3 text-light py-4 my-4">
                        <div class="card-body">
                            <h5 class="text-uppercase font-weight-bold mb-5">Corporate Project</h5>
                            <h1 class="display-4"><FontAwesomeIcon icon={faDollarSign}/>1000</h1>
                            <ul class="list-unstyled">
                                <li class="font-weight-bold py-3">HTML / CSS / Graphic Design</li>
                                <li class="font-weight-bold py-3">MERN Stacik</li>
                                <li class="font-weight-bold py-3">Login / Logout / Basic Orders</li>
                                <li class="font-weight-bold py-3">Exta Routes - Store Functionality</li>
                            </ul>
                            <button className="btn p-2 text-uppercase font-weight-bold text-light price-card-button"
                                style={ buttonStyle }
                            ><Link style={{ color: 'white', textDecoration: 'none' }} to="#">More</Link></button>
                        </div>
                    </div>
                    {/* <!-- end card3 --> */}
                </div>
                {/* <!-- end col --> */}


            </div>
            {/* <!-- end of row --> */}

            <div class="my-5">
                        <h2 class="text-muted mb-4">Thanks for being with us!</h2>
                        <FontAwesomeIcon icon={faCoffee} size="3x" className="mb-4"/> 
                <i class="fas fa-coffee fa-3x"></i>
            </div>
        </div>
        {/* <!-- end of container --> */}

    </section>
    {/* // <!-- end pricing --> ); */}
    </React.Fragment >
);
            
} 
export default Prices;