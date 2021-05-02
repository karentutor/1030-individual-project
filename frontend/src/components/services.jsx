import React from 'react';
import mountains from '../images/img1.jpeg';
import camera from '../images/img2.jpeg';
import splashCup from '../images/img3.jpeg';
import pebbles from '../images/img4.jpeg';
import oldStreet from '../images/img5.jpeg';
import tallBuildings from '../images/img6.jpeg';



const Services = () => {
    return (  
        <>
{/* `        < !--collection -- >` */}
    <section className="bg-secondary py-4">
        <div className="container-fluid">
            {/* <!-- title--> */}
            <div className="row text-center text-white">
                <div className="col m-4">
                    <h1 className="display-4 mb-4">Services</h1>
                    <div className="underline mb-4"></div>
                    <h3 >Our Services</h3>
                </div>
            </div>
            {/* <!-- end of title-->

            <!-- row --> */}
            <div className="row text-center">

                {/* <!-- start of col --> */}
                <div className="col-lg-4 col-sm-6 my-5">
                    {/* <!-- remove border by border-0 --> */}
                    <div className="card border-0 card-shadow">
                        {/* <!-- card responsive is card-image --> */}
                        <img className="card-img" src={mountains} alt=""/>

                        <div className="card-img-overlay">

                            <h5 className="text-white font-weight-bold text-uppercase p-2 heading">Design with HTML & CSS
                            </h5>
                        </div>
                    </div>
                </div>
                {/* <!-- end of col -->

                <!-- start of col --> */}
                <div className="col-lg-4 col-sm-6 my-5">
                    {/* <!-- remove border by border-0 --> */}
                    <div className="card border-0 card-shadow">
                        {/* <!-- card responsive is card-image --> */}
                        <img className="card-img" src={camera} alt=""/>

                        <div className="card-img-overlay">

                            <h5 className="text-white font-weight-bold text-uppercase p-2 heading">Webhosting</h5>
                        </div>
                    </div>
                </div>
                {/* <!-- end of col -->

                <!-- start of col --> */}
                <div className="col-lg-4 col-sm-6 my-5">
                    {/* <!-- remove border by border-0 --> */}
                    <div className="card border-0 card-shadow">
                                {/* <!-- card responsive is card-image -->*/}
                        <img className="card-img" src={splashCup} alt="" /> 

                        <div className="card-img-overlay">

                            <h5 className="text-white font-weight-bold text-uppercase p-2 heading">Linux and Server
                                Management</h5>
                        </div>
                    </div>
                </div>
                {/* <!-- end of col -->

                <!-- start of col --> */}
                <div className="col-lg-4 col-sm-6 my-5">
                    {/* <!-- remove border by border-0 --> */}
                    <div className="card border-0 card-shadow">
                        {/* <!-- card responsive is card-image --> */}
                        <img className="card-img" src={pebbles} alt=""/>

                        <div className="card-img-overlay">

                            <h5 className="text-white font-weight-bold text-uppercase p-2 heading">JavaScript and NODEjs
                            </h5>
                        </div>
                    </div>
                </div>
                {/* <!-- end of col --> */}

                {/* <!-- start of col --> */}
                <div className="col-lg-4 col-sm-6 my-5">
                    {/* <!-- remove border by border-0 --> */}
                    <div className="card border-0 card-shadow">
                        {/* <!-- card responsive is card-image --> */}
                        <img className="card-img" src={oldStreet} alt=""/>

                        <div className="card-img-overlay">

                            <h5 className="text-white font-weight-bold text-uppercase p-2 heading">PHP</h5>
                        </div>
                    </div>
                </div>
                {/* <!-- end of col --> */}

                {/* <!-- start of col --> */}
                <div className="col-lg-4 col-sm-6 my-5">
                    {/* <!-- remove border by border-0 --> */}
                    <div className="card border-0 card-shadow">
                        {/* <!-- card responsive is card-image --> */}
                        <img className="card-img" src={tallBuildings} alt=""/>

                        <div className="card-img-overlay">

                            <h5 className="text-white font-weight-bold text-uppercase p-2 heading">MySQL MariaDB MongoDB
                            </h5>
                        </div>
                    </div>
                </div>
                {/* <!-- end of col --> */}


            </div>
            {/* <!-- end row --> */}
        </div>

    </section>
     {/* <!-- end collection --> */}
    </>
     );
}
 
export default Services;