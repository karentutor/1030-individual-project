import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {isAuthenticated} from '../../auth'
import {create} from './apiPortfolio'

class Portfolio extends Component {
        constructor() {
        super();
        this.state = {
            title: "",
            description: "", //first name
            completed: "",  //last name
            error: "",
            user: {},
            fileSize: 0,
            loading: false,
            redirectPortfolio: false
        };
    }

    componentDidMount() {
        this.formData = new FormData();
        this.setState({ user: isAuthenticated().user });
    }

    isValid = () => {
        const { fName, lName, gender, dob,  address, pNumber, email, hCard, information, fileSize } = this.state; //added lname
        if (fileSize > 100000) {
            this.setState({
                error: "File size should be less than 100kb",
                loading: false
            });
            return false;
        }

        //lname added below
        if (fName.length === 0 || lName.length === 0 || gender.length === 0 || dob.length === 0 || address.length === 0 || pNumber.length === 0 || email.length === 0 || hCard.length === 0 ||information.length === 0) {
            this.setState({ error: "All fields are required", loading: false });
            return false;
        }
        return true;
    };

    handleChange = name => event => {
        this.setState({ error: "" });
        const value = event.target.value;

        const fileSize = 0;
        this.formData.set(name, value);
        this.setState({ [name]: value, fileSize });
    };

    clickSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });

        if (this.isValid()) {
            const userId = isAuthenticated().user._id;
            const token = isAuthenticated().token;


            create(userId, token, this.formData).then(data => {
                if (data.error) this.setState({ error: data.error });
                else {
                    this.setState({
                        loading: false,
                        title: "",
                        description: "",
                        type: "",
                        completed: "",
                        redirectToPatient: true
                    });
                }
            });
        }
    };

    newPortfolioForm = (title, description, type, completed) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Project Title</label>
                <input
                    onChange={this.handleChange("title")}
                    type="text"
                    className="form-control"
                    value={title}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Project Description</label>
                <input
                    onChange={this.handleChange("description")}
                    type="text"
                    className="form-control"
                    value={description}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Project Type</label>

                <select class="form-select" aria-label="Default select example" onChange={this.handleChange("type")} className="form-control"
                    value={type}>
                <option selected>Select Type</option>
                <option value="1">Static website</option>
                <option value="2">Social Media Website</option>
              </select>
               
            </div>

            

            <div className="form-group">
                <label className="text-muted">Completed</label>
                <input
                    onChange={this.handleChange("completed")}
                    type="date"
                    className="form-control"
                    value={completed}
                />
            </div>
            
            <button
                onClick={this.clickSubmit}
                className="btn btn-raised btn-primary"
            >
                Create Portfolio Item
            </button>
            <br /><br /><br />
        </form>
    );

    render() {
        const {
            title,
            description,
            type,
            completed,
            user,
            error,
            loading,
            redirectToPortfolio
        } = this.state;

        if (redirectToPortfolio) {
            return <Redirect to={`/portfolio`} />;
        }

        return (
            <div className="container create-portfolio">
                <br /><br />
                <h2 className="mt-5 mb-5">Create a new project</h2>
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                {loading ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    ""
                )}

                {this.newPortfolioForm(title, description, type, completed)}
            </div>
        );
    }

}
 
export default Portfolio;