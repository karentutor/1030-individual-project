import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class TableHeader extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon = (column) => {
    const {sortColumn} = this.props;

    if(column.path !== sortColumn.path) return  <FontAwesomeIcon icon={faAngleDown} />;
    if(sortColumn.order === 'asc') return  <FontAwesomeIcon icon={faAngleDown} />;
    return  <FontAwesomeIcon icon={faAngleUp} />
  }

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th className="clickable text-white" key={column.path|| column.key} onClick={() => this.raiseSort(column.path)}>
                {column.label} {this.renderSortIcon(column)}   
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;