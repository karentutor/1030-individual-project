import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../auth";
import ThingTable from "./thingTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getThings, remove } from "./apiProject";
import { getTypes } from "./apiProject";
import { paginate } from "../../util/paginate";
import _ from "lodash";

class Projects extends Component {
	state = {
		things: [],
		types: [],
		currentPage: 1,
		pageSize: 5,
		sortColumn: { path: "title", order: "asc" },
	};

	componentDidMount() {
		this.loadTypes();
		this.loadThings();
	}

	loadTypes = () => {
		getTypes().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				const types = [{ _id: "", type: "All Types" }, ...data];
				this.setState({ types });
			}
		});
	};

	loadThings = () => {
		getThings().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ things: data });
			}
		});
	}; // end loadThings

	handleDelete = (thing) => {
		const token = isAuthenticated().token;
		remove(thing._id, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				//				console.log('success');
				this.setState({ things: data });
			}
		});
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleTypeSelect = (type) => {
		this.setState({ selectedType: type, currentPage: 1 });
	};

	handleSort = (sortColumn) => {
		this.setState({ sortColumn });
	};

	getPagedData = () => {
		const {
			pageSize,
			currentPage,
			sortColumn,
			selectedType,
			things: allThings,
		} = this.state;

		const filtered =
			selectedType && selectedType._id
				? allThings.filter((i) => i.type === selectedType.type)
				: allThings;

		const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

		const things = paginate(sorted, currentPage, pageSize);

		// return { totalCount: filtered.length, data: things };
		return { totalCount: sorted.length, things };
	};

	render() {
		const { length: count } = this.state.things;

		const {
			pageSize,
			currentPage,
			selectedType,
			sortColumn,
			types,
		} = this.state;

		const { totalCount, things } = this.getPagedData();

		const id = "new";

		if (count === 0)
			return (
				<>
					<section className="bg-secondary">
						<br />
						<br />
						<br />
						<div className="container">
							<h3 className="text-white">
								There are no things in the database.
							</h3>
							<br />
							<br />
							<Link
								to={`/project/${id}`}
								className="btn btn-raised btn-warning"
							>
								Create a new project item
							</Link>
							<br />
							<br />
						</div>
					</section>
				</>
			);
		return (
			<>
				<section className="bg-secondary">
					<br />
					<br />
					<br />
					<div className="container">
						{isAuthenticated() && isAuthenticated().user.role === 'admin' &&
							<div className="col offset-3">
								<div className="row">
									<Link
										to={`/project/${id}`}
										className="btn btn-raised btn-warning btn-sm"
									>
										Create a new project item
								</Link>
								</div>
							</div>
						}
						<br />
						<div className="row">
							<div className="col-3">
								<ListGroup
									items={types}
									selectedItem={this.state.selectedType}
									textProperty="type"
									valueProperty={"_id"}
									onItemSelect={this.handleTypeSelect}
								/>
							</div>
							<div className="col">
								<p className="text-white">Showing {totalCount} thing(s) in the database.</p>
								<ThingTable
									things={things}
									sortColumn={sortColumn}
									onDelete={this.handleDelete}
									onSort={this.handleSort}
								/>
								<Pagination
									itemsCount={totalCount}
									pageSize={pageSize}
									currentPage={currentPage}
									onPageChange={this.handlePageChange}
								/>
							</div>
						</div>
					</div>
					<br />
					<br />
				</section>
			</>
		);
	}
}

export default Projects;
