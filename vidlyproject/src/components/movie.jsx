import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    tableHeader: ["_id", "title", "numberInStock", "dailyRentalRate"],
    movies: getMovies()
  };
  render() {
    return (
      <table className="table">
        {this.movieHeader()}
        <tbody>{this.getMovieData()}</tbody>
      </table>
    );
  }

  deleteMovie = id => {
    console.log("deleted", id);
    const movieList = [...this.state.movies];
    const newMovieList = movieList.filter(element => {
      if (element._id === id) return;
      return element;
    });

    this.setState({ movies: newMovieList });
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
