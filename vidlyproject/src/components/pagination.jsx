import React, { Component } from "react";
import _ from "lodash";
import propTypes from "prop-types";

class Pagination extends Component {
  state = {};
  render() {
    const { itemCount, pageSize, pageChangeHandler } = this.props;
    const pages = itemCount / pageSize;
    const arrayOfPageNumbers = _.range(1, pages + 1);
    if (pages <= 1) return null;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {arrayOfPageNumbers.map(pageNumber => {
            return (
              <li className="page-item" key={pageNumber}>
                <span
                  className="page-link"
                  onClick={() => pageChangeHandler(pageNumber)}
                >
                  {pageNumber}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  pageChangeHandler: propTypes.func.isRequired
};

export default Pagination;
