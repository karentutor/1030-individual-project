import React, { Component } from "react";
import { singleAccomplishment, remove } from "./apiAccomplishments";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../auth";

class Accomplishment extends Component {
    
	state = {
		accomplishment: "",
		redirectToHome: false,
		redirectToSignin: false
	};

	componentDidMount = () => {
		const accomplishmentId = this.props.match.params.accomplishmentId;

		singleAccomplishment(accomplishmentId).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({
					// 	comments: dataComments,
					accomplishment: data,
				});
			}
		});
	};

	deleteaccomplishment = () => {
		const accomplishmentId = this.props.match.params.accomplishmentId;
		const token = isAuthenticated().token;
		remove(accomplishmentId, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ redirectToHome: true });
			}
		});
	};

	deleteConfirmed = () => {
		let answer = window.confirm(
			"Are you sure you want to delete your accomplishment?"
		);
		if (answer) {
			this.deleteaccomplishment();
		}
	};

	renderAccomplishment = (accomplishment) => {
        return (
            <section className="bg-warning">
			<div className="card-body container view-accomplishment mt-0 pt-0">
				<h2 className="pb-4 text-center ">View accomplishment {accomplishment.title} </h2>
				<h5 className="card-text">{accomplishment.description}</h5>
				<h5 className="card-text">{accomplishment.type}</h5>
				<h5 className="card-text">{accomplishment.completed}</h5>
				<br />
				<div className="d-inline-block">
					<Link
						to={`/accomplishments`}
						className="btn btn-raised btn-primary mr-4 mb-3"
					>
						Back to accomplishments
					</Link>

					<div>
						{isAuthenticated().user && isAuthenticated().user.role === "admin" && (
							<div class="card mt-5">
								<div className="card-body">
									<h5 className="card-title">Admin</h5>
									<p className="mb-2 text-danger">Edit/Delete as an Admin</p>
									<Link
										to={`/accomplishment/edit/${accomplishment._id}`}
										className="btn btn-raised btn-warning mb-3 mr-4 text-white"
									>
										Update accomplishment
									</Link>
									<button
										onClick={this.deleteConfirmed}
										className="btn btn-raised btn-danger mb-3"
									>
										Delete accomplishment
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
		const { accomplishment, redirectToHome, redirectToSignin } = this.state;

		if (redirectToHome) {
			return <Redirect to={`/`} />;
		} else if (redirectToSignin) {
			return <Redirect to={`/signin`} />;
		}
        return (
            <section className="bg-secondary">
            <div className="container bg-secondary">
                <br /><br />
				<h2 className="display-2 text-center mt-5 mb-5">{accomplishment.name}</h2>

				{!accomplishment ? (
					<div className="jumbotron text-center">
						<h2>Loading...</h2>
					</div>
				) : (
					this.renderAccomplishment(accomplishment)
				)}
                </div>
                </section>
		);
	}
}

export default Accomplishment;