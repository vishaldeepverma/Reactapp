import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    tableHeader: ["title", "numberInStock", "dailyRentalRate"],
    movies: getMovies()
  };
  render() {
    if (this.state.movies.length === 0) return <h1>No Movies left</h1>;
    return (
      <React.Fragment>
        <h1>Showing {this.state.movies.length} Movies</h1>
        <table className="table">
          {this.movieHeader()}
          <tbody>{this.getMovieData()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  deleteMovie = id => {
    console.log("deleted", id);
    const movies = this.state.movies.filter(element => {
      if (element._id === id) return;
      return element;
    });

    this.setState({ movies });
  };

  getMovieData() {
    return (
      <React.Fragment>
        {this.state.movies.map(element => {
          return (
            <tr key={element._id}>
              {this.state.tableHeader.map(property => {
                return <td key={Math.random()}>{element[property]}</td>;
              })}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteMovie(element._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  }

  movieHeader() {
    return (
      <thead>
        <tr>
          {this.state.tableHeader.map(eachHeader => {
            return (
              <th scope="col" key={eachHeader}>
                {eachHeader}
              </th>
            );
          })}
          <th>Delete</th>
        </tr>
      </thead>
    );
  }
}

export default Movie;
