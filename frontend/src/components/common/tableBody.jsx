import React, { Component } from "react";
import _ from "lodash";
import { isAuthenticated } from "../../auth";


class TableBody extends Component {
  renderCell = (item, column) => {
    // not signed in 
    if (column.key === 'delete' && !isAuthenticated()) return null;
    // signed in not admin
    if (column.key === 'delete' && isAuthenticated() && isAuthenticated().user.role === 'subscriber') return null;
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;