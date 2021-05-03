import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar  extends Component {
    
  state = {
    change: ""
  }

  handleNav = () => {
    
    const { change } = this.state;
    let newChange  = change  === 'change' ? '' : 'change';
    this.setState({ change : newChange });
  }

  render() {
    const { change } = this.state;
    const { user } = this.props; 
    const navStyle = `navbar-toggler nav-button ${change}`;

    return (
      <section className="mb-5">
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
          <NavLink to="/" className="navbar-brand text-light text-uppercase "><span className="h2 font-weight-bold">Nanoosebay</span><span
            className="h1"> Dev</span></NavLink >
          <button className={navStyle} type="button" data-toggle="collapse" data-target="#myNavbar" onClick={this.handleNav} >

            <div className="bg-light line1"></div>
            <div className="bg-light line2"></div>
            <div className="bg-light line3"></div>

          </button>

          {/* <!-- start by putting on the right hand side by justify-contnet-end--> */}

          <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="myNavbar">

            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link nav-active mr-2 menu-item" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link nav-active mr-2 menu-item" to="/services">Services</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link nav-active mr-2 menu-item" to="/projects">Portfolio</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link nav-active mr-2 menu-item" to="/resume">Resume</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link nav-active mr-2 menu-item" to="/prices">Prices</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link nav-active mr-2 menu-item" to="/contact">Contact</NavLink></li>
              {!user && <><li className="nav-item"><NavLink className="nav-link nav-active mr-2 menu-item" to="/login">Signin</NavLink></li>
              <li className="nav-item"><NavLink style={{ color: 'red' }} className="nav-link nav-active mr-2 menu-item" to="/users">Register</NavLink></li></>}    
              {user &&
                <>
                <li className="nav-item"><NavLink style={{ color: 'red' }} className="nav-link nav-active mr-2 menu-item" to="/logout" >Logout</NavLink></li>
                </>}    
            </ul>
          </div>
        </nav>
      </section>
    )
  }
}
 
export default NavBar;