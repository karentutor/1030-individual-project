import { Component } from 'react';
import {signout} from '../auth'

class Logout extends Component {
    
    componentDidMount() {
        signout();
        window.location = '/';

    }
    render() { 
        return null;
    }
}
 
export default Logout;