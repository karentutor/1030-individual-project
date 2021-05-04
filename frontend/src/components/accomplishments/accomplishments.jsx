import React, { Component } from "react";
import {isAuthenticated} from '../../auth'
import { getThings } from "./apiAccomplishments";
import { Link } from "react-router-dom";

class Accomplishments extends Component {
	constructor() {
		super();
		this.state = {
			accomplishments: [],
		};
	}

	loadAccomplishments = () => {
		getThings().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ accomplishments: data });
			}
		});
	};

	componentDidMount() {
		this.loadAccomplishments();
	}

	renderAccomplishments = (accomplishments) => {

		return (
			<div className="row">
				{accomplishments.map((accomplishment, i) => {
					const posterId = accomplishment.postedBy
						? `/user/${accomplishment.postedBy._id}`
						: "";
					const posterName = accomplishment.postedBy
						? accomplishment.postedBy.name
						: " Unknown";

					return (
						<>
							<div class="jumbotron" key={i}>
								<h1 class="display-4">{accomplishment.title}</h1>
								<p class="lead">{accomplishment.description}</p>
								<hr class="my-4" />
								<p>{accomplishment.completed}</p>
								<p class="lead">
									<Link
										to={`/accomplishment/${accomplishment._id}`}
										className="btn btn-primary btn-lg"
									>
										Read more
									</Link>
								</p>
							</div>
						</>
					);
				})}
			</div>
		);
	};

	render() {
		const { accomplishments, page } = this.state;
		return (
			<section className="bg-secondary">
			<div className="container">
				<br /><br /><br />
				<h2 className="mt-5 mb-5 text-center">
					{!accomplishments.length
						? "No more accomplishments!"
						: "Recent accomplishments"}
				</h2>
					{isAuthenticated() && isAuthenticated().user.role === 'admin' &&
							<div className="col offset-3">
								<div className="row">
									<Link
										to={`/accomplishment/new`}
										className="btn btn-raised btn-warning btn"
									>
										Create a new accomplishment
								</Link>
								</div>
							</div>
						}		
				{this.renderAccomplishments(accomplishments)}
				</div>
				</section>
		);
	}
}

export default Accomplishments;
