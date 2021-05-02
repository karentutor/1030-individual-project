import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../auth";
import ThingTable from "./thingTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getThings, remove } from "./apiPortfolio";
import { getTypes } from "./apiPortfolio";
import { paginate } from "../../util/paginate";
import _ from "lodash";

class Portfolio extends Component {
	state = {
		things: [],
		types: [],
		currentPage: 1,
		pageSize: 1,
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

		console.log(selectedType);
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

		if (count === 0)
			return (
				<>
					<br />< br /><br />
					<p>There are no things in the database.</p>
						<Link
							to={`/portfolio/new`}
							className="btn btn-raised btn-primary btn-sm"
						>
							Create a new portfolio item
						</Link>
				</>
			);
		return (
			<>
				<br />
				<br />
				<button>
				click me
				</button>
				<div className="container">
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
							<p>Showing {totalCount} thing(s) in the database.</p>
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
			</>
		);
	}
	// render() {

	//   const { pageSize, currentPage, sortColumn } = this.state;

	//   const { totalCount, data: things } = this.getPagedData();

	//   return (
	//     <div className="row">
	//       <div className="col-3">
	//         <ListGroup
	//           items={this.state.types}
	//           selectedItem={this.state.selectedType}
	//           onItemSelect={this.handleTypeSelect}
	//         />
	//       </div>
	//       <div className="col">
	//         <p>Showing {totalCount} things in the database.</p>
	//         <ThingsTable
	//           things={things}
	//           sortColumn={sortColumn}
	//           onLike={this.handleLike}
	//           onDelete={this.handleDelete}
	//           onSort={this.handleSort}
	//         />
	//         <Pagination
	//           itemsCount={totalCount}
	//           pageSize={pageSize}
	//           currentPage={currentPage}
	//           onPageChange={this.handlePageChange}
	//         />
	//       </div>
	//     </div>
	//   );
	// }
}

export default Portfolio;
