import React, { Component } from 'react';
import { isAuthenticated } from './auth';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//import ContactForm from './components/forms/contactForm';
import Footer from './components/core/footer';
import Home from './components/home/home';
import NavBar from './components/core/navBar';
import Accomplishment from './components/accomplishments/accomplishment';
import EditAccomplishment from './components/accomplishments/editAccomplishment';
import Accomplishments from './components/accomplishments/accomplishments';
import NewAccomplishment from './components/accomplishments/newAccomplishment';
import Project from './components/project/project';
import EditProject from './components/project/editProject';
import NewProject from './components/project/newProject';
import Projects from './components/project/projects';
import Prices from './components/prices';
import ProtectedRoute from './components/common/protectedRoute';
import Register from './components/register';
//import Entries from './components/entries';
import NotFound from './components/notFound';
import LoginForm from './components/forms/loginForm';
import Logout from './components/logout';
//import Resume from './components/resume';
import Services from './components/services';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {};

  componentDidMount() {
    const user = isAuthenticated() ? isAuthenticated().user : null;
    this.setState({ user });
  }

  render() {

    const { user } = this.state;

    return (
      <>
        <ToastContainer />
        <NavBar user={user} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
          <Route exact path="/accomplishments" component={Accomplishments} />
           <Route exact path="/accomplishment/new" component={NewAccomplishment} />
          <Route exact path="/accomplishment/:accomplishmentId" component={Accomplishment} />
          <Route exact path="/accomplishment/edit/:accomplishmentId" component={EditAccomplishment} />
          <Route exact path="/project/edit/:projectId" component={EditProject} />
          <Route exact path="/project/new" component={NewProject} />
          <Route exact path="/project/:projectId" component={Project} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/prices" component={Prices} />
          {/* <Route path="/contact" component={ContactForm} /> */}
          <Route path="/resume" component={Accomplishments} />
          <Route path="/users" component={Register} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          {/* <ProtectedRoute path="/entries" component={Entries} /> */}
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
             
      </>
    );
  }
}
export default App;
