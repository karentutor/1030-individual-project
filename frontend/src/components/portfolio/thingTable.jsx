import React, { Component } from "react";
import Table from "../common/table";

// add column title and label
class ThingTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "description", label: "Description" },
    { path: "type", label: "Type" },
    { path: "completed", label: "Completed" },
    {
      key: "delete",
      content: thing => (
        <button
          onClick={() => this.props.onDelete(thing)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { things, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={things}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ThingTable;
