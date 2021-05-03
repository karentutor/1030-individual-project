import React, { Component } from "react";
import { getThings } from "./apiAccomplishments";
import { Link } from "react-router-dom";

class Accomplishments extends Component {
	constructor() {
		super();
		this.state = {
			accomplishments: []
		};
	}

	loadAccomplishments = () => {
		getThings().then(() => {
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
						<div className="card col-md-4" key={i}>
							<div className="card-body">
								<h5 className="card-title">{accomplishment.title}</h5>
								{/* <p className="card-text">{accomplishment.body.substring(0, 100)}</p> */}
								<p className="card-text">{accomplishment.body}</p>
								{/* <br /> */}
								<p className="font-italic mark">
									Posted by <Link to={`${posterId}`}>{posterName} </Link>
									on {new Date(accomplishment.created).toDateString()}
								</p>
								<div className="text-center">
									<Link
										to={`/accomplishment/${accomplishment._id}`}
										className="btn btn-raised btn-primary btn-sm"
									>
										Read more
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	render() {
		const { accomplishments } = this.state;
		return (
			<div className="container">
				<h2 className="mt-5 mb-5 text-center">
					{!accomplishments.length ? "No more accomplishments!" : "Recent Patient accomplishments"}
				</h2>

				{this.renderAccomplishments(accomplishments)}

			</div>
		);
	}
}

export default Accomplishments;
