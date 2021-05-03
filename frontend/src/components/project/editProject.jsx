import React, { Component } from "react";
import { singleProject, update } from "./apiProject";
import { isAuthenticated } from "../../auth";
import { Link, Redirect } from "react-router-dom";

class Editproject extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			description: "",
			completed: "",
			type: "",
			error: "",
			user: {},
			fileSize: 0,
			loading: false,
			redirectProject: false,
		};
	}

	init = (projectId) => {
		singleProject(projectId).then((data) => {
			if (data.error) {
				this.setState({ redirectToProjects: true });
			} else {
				this.setState({
					title: data.title,
					description: data.description,
					completed: data.completed,
					type: data.type,
				});
			}
		});
	};

	componentDidMount() {
		this.projectData = new FormData();
		const projectId = this.props.match.params.projectId;
		this.init(projectId);
	}

	isValid = () => {
		// const { name, information, fileSize } = this.state;
		// if (fileSize > 1000000) {
		// 	this.setState({
		// 		error: "File size should be less than 100kb",
		// 		loading: false,
		// 	});
		// 	return false;
		// }
		// if (name.length === 0 || information.length === 0) {
		// 	this.setState({ error: "All fields are required", loading: false });
		// 	return false;
		// }
		return true;
	};

	handleChange = (name) => (event) => {
		this.setState({ error: "" });
		const value = name === "photo" ? event.target.files[0] : event.target.value;

		const fileSize = name === "photo" ? event.target.files[0].size : 0;
		this.projectData.set(name, value);
		this.setState({ [name]: value, fileSize });
	};

	clickSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });

		if (this.isValid()) {
			const projectId = this.props.match.params.projectId;
			const token = isAuthenticated().token;

			update(projectId, token, this.projectData).then((data) => {
				if (data.error) this.setState({ error: data.error });
				else {
					this.setState({
						loading: false,
						message: "Record updated",
						title: data.title,
						description: data.description,
						completed: data.completed,
						type: data.type
					});
				}
			});
		}
	};

	editProjectForm = (title, description, completed, type) => (
		<form>
			<div className="form-group">
				<label className="text-muted">Title</label>
				<input
					onChange={this.handleChange("title")}
					type="text"
					className="form-control"
					value={title}
				/>
			</div>

			<div className="form-group">
				<label className="text-muted">Description</label>
				<textarea
					onChange={this.handleChange("description")}
					type="text"
					className="form-control"
					value={description}
				/>
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

			<div className="form-group">
				<label className="text-muted">Type</label>

				<select
					class="form-select"
					aria-label="Default select example"
					onChange={this.handleChange("type")}
					className="form-control"
					value={type}
				>
					<option selected>Select Type</option>
					<option value="1">Static Website</option>
					<option value="2">Social Media Website</option>
				</select>
			</div>

			<button onClick={this.clickSubmit} className="btn btn-raised btn-primary">
				Update Project
			</button>
		</form>
	);

	render() {
		const {
			title,
			description,
			completed,
			type,
			user,
			id,
			message,
			error,
			redirectToprojects,
			loading,
		} = this.state;

		if (redirectToprojects) {
			return <Redirect to={`/findprojects`} />;
		}

		return (
			<div className="container update-project">
				<h2 className="text-white text-center pt-5">Update project</h2>

				<h3 className="mt-4 mb-4 text-white">{title}</h3>

				<div
					className="alert alert-danger"
					style={{ display: error ? "" : "none" }}
				>
					{error}
				</div>

				<div
					className="alert alert-success"
					style={{ display: message ? "" : "none" }}
				>
					{message} <Link to="/projects"> Return to Portfolio</Link>.
				</div>

				{loading ? (
					<div className="jumbotron text-center">
						<h2>Loading...</h2>
					</div>
				) : (
					""
				)}

				{/* {isAuthenticated().user.role === "admin" &&
					this.editprojectForm(
						fName,
						lName,
						gender,
						dob,
						address,
						pNumber,
						email,
						hCard,
						information
					)} */}

				{/* {isAuthenticated().user._id == id &&
					this.editprojectForm(
						fName,
						lName,
						gender,
						dob,
						address,
						pNumber,
						email,
						hCard,
						information
					)} */}

				{(isAuthenticated().user._id == id ||
					isAuthenticated().user.role === "admin") &&
					this.editProjectForm(title, description, completed, type)}
			</div>
		);
	}
}

export default Editproject;
