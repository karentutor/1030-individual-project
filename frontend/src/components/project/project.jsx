import React, { Component } from "react";
import { singleProject, remove } from "./apiProject";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../auth";

class Project extends Component {
	state = {
		project: "",
		redirectToHome: false,
		redirectToSignin: false
	};

	componentDidMount = () => {
		const projectId = this.props.match.params.projectId;

		singleProject(projectId).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({
					// 	comments: dataComments,
					project: data,
				});
			}
		});
	};

	deleteProject = () => {
		const projectId = this.props.match.params.projectId;
		const token = isAuthenticated().token;
		remove(projectId, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ redirectToHome: true });
			}
		});
	};

	deleteConfirmed = () => {
		let answer = window.confirm(
			"Are you sure you want to delete your project?"
		);
		if (answer) {
			this.deleteProject();
		}
	};

	renderProject = (project) => {
		return (
			<section className="bg-secondary">
			<div className="card-body view-project mt-0 pt-0">
				<h2 className="pb-4">View project {project.title} </h2>
				<p className="card-text">{project.description}</p>
				<p className="card-text">{project.type}</p>
				<p className="card-text">{project.completed}</p>
				<br />
				<div className="d-inline-block">
					<Link
						to={`/projects`}
						className="btn btn-raised btn-primary mr-4 mb-3"
					>
						Back to projects
					</Link>

					<div>
						{isAuthenticated().user && isAuthenticated().user.role === "admin" && (
							<div class="card mt-5">
								<div className="card-body">
									<h5 className="card-title">Admin</h5>
									<p className="mb-2 text-danger">Edit/Delete as an Admin</p>
									<Link
										to={`/project/edit/${project._id}`}
										className="btn btn-raised btn-warning mb-3 mr-4 text-white"
									>
										Update project
									</Link>
									<button
										onClick={this.deleteConfirmed}
										className="btn btn-raised btn-danger mb-3"
									>
										Delete project
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				</div>
				</section>
		);
	};

	render() {
		const { project, redirectToHome, redirectToSignin } = this.state;

		if (redirectToHome) {
			return <Redirect to={`/`} />;
		} else if (redirectToSignin) {
			return <Redirect to={`/signin`} />;
		}
		return (
			<div className="container">
				<h2 className="display-2 mt-5 mb-5">{project.name}</h2>

				{!project ? (
					<div className="jumbotron text-center">
						<h2>Loading...</h2>
					</div>
				) : (
					this.renderProject(project)
				)}
			</div>
		);
	}
}

export default Project;
