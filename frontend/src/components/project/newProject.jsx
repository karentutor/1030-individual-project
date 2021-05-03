import React, { Component } from "react";
import { isAuthenticated } from "../../auth";
import { create } from "./apiProject";
import { Redirect } from "react-router-dom";

class NewProject extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            completed: '',
            type: '',
            error: "",
            user: {},
            fileSize: 0,
            loading: false,
            redirectProject: false
        };
    }

    componentDidMount() {
        this.formData = new FormData();
        this.setState({ user: isAuthenticated().user });
    }

    handleChange = name => event => {
        this.setState({ error: "" });
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;

        const fileSize = name === "photo" ? event.target.files[0].size : 0;
        this.formData.set(name, value);
        this.setState({ [name]: value, fileSize });
    };

    clickSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });

        // if (this.isValid()) {
            const userId = isAuthenticated().user._id;
            const token = isAuthenticated().token;

            create(userId, token, this.formData).then(data => {
                if (data.error) this.setState({ error: data.error });
                else {
                    this.setState({
                        title: '',
                        description: '',
                        completed: '',
                        type : '',
                        loading: false,
                        redirectToProject: true
                    });
                }
            });
    //    }
     };

    newProjectForm = (title, description, completed, type) => (
        <form>
            <div className="form-group">
                <h5 className="text-white">Title</h5>
                <input
                    onChange={this.handleChange("title")}
                    type="text"
                    className="form-control"
                    value={title}
                />
            </div>
            
            <div className="form-group">
         <h5 className="text-white">Description</h5>
                <textarea
                    onChange={this.handleChange("description")}
                    type="text"
                    className="form-control"
                    value={description}
                />
            </div>

            <div className="form-group">
         <h5 className="text-white">Completed</h5>
                <input
                    onChange={this.handleChange("completed")}
                    type="date"
                    className="form-control"
                    value={completed}
                />
            </div>

                 <div className="form-group">
         <h5 className="text-white">Project Type</h5>
                <select class="form-select" aria-label="Default select example" onChange={this.handleChange("type")} className="form-control"
                    value={type}>
                <option selected>Select Type</option>
                <option value="1">Static Website</option>
                <option value="2">Social Media Website</option>
              </select>
               
            </div>

            <button
                onClick={this.clickSubmit}
                className="btn btn-raised btn-warning"
            >
                Create Project
            </button>
        </form>
    );

    render() {
        const {
            title,
            description,
            type,
            completed,
            error,
            loading,
            redirectToProject
        } = this.state;

        if (redirectToProject) {
            return <Redirect to={`/projects`} />;
        }

        return (
            <section className="bg-secondary">
                <div className="container">
                    <br /><br /><br />
                <h2 className="mt-5 mb-5 text-white">Create a new project</h2>
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

                {this.newProjectForm(title, description, completed, type)}
                </div>
                </section>
        );
    }
}

export default NewProject;