import React, { Component } from "react";
import { singleAccomplishment, update } from "./apiAccomplishments";
import { isAuthenticated } from "../../auth";
import { Link, Redirect } from "react-router-dom";

class EditAccomplishment extends Component {
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
			redirectAccomplishment: false,
		};
	}

	init = (accomplishmentId) => {
		singleAccomplishment(accomplishmentId).then((data) => {
			if (data.error) {
				this.setState({ redirectToaccomplishments: true });
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
		this.accomplishmentData = new FormData();
		const accomplishmentId = this.props.match.params.accomplishmentId;
		this.init(accomplishmentId);
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
		this.accomplishmentData.set(name, value);
		this.setState({ [name]: value, fileSize });
	};

	clickSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });

		if (this.isValid()) {
			const accomplishmentId = this.props.match.params.accomplishmentId;
			const token = isAuthenticated().token;

			update(accomplishmentId, token, this.accomplishmentData).then((data) => {
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

	editAccomplishmentForm = (title, description, completed, type) => (
		<form>
			<div className="form-group">
				<label className="text-white">Title</label>
				<input
					onChange={this.handleChange("title")}
					type="text"
					className="form-control"
					value={title}
				/>
			</div>

			<div className="form-group">
				<label className="text-white">Description</label>
				<textarea
					onChange={this.handleChange("description")}
					type="text"
					className="form-control"
					value={description}
				/>
			</div>

			<div className="form-group">
				<label className="text-white">Completed</label>
				<input
					onChange={this.handleChange("completed")}
					type="date"
					className="form-control"
					value={completed}
				/>
			</div>

			<div className="form-group">
				<label className="text-white">Type</label>

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
				Update accomplishment
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
			redirectToaccomplishments,
			loading,
		} = this.state;

		if (redirectToaccomplishments) {
			return <Redirect to={`/resume`} />;
		}

		return (
			<section className="bg-secondary">
			<div className="container update-accomplishment">
					<h2 className="text-white text-center pt-5">Update accomplishment {title}</h2>

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
					{message} <Link to="/resume"> Return to Resume</Link>.
				</div>

				{loading ? (
					<div className="jumbotron text-center">
						<h2>Loading...</h2>
					</div>
				) : (
					""
				)}

				{(isAuthenticated().user._id == id ||
					isAuthenticated().user.role === "admin") &&
					this.editAccomplishmentForm(title, description, completed, type)}
				</div>
				</section>
		);
	}
}

export default EditAccomplishment;
