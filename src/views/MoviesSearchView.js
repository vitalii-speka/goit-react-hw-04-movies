import React, { Component } from "react";
import Axios from "axios";

import MoviesPage from "../componets/MoviesPage";

export class MoviesSearchView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US&query=Malcolm&page=1&include_adult=false"
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    // const { match } = this.props;

    // console.log(match.url);
    return (
      <>
        <h1>MoviesPage</h1>
        <MoviesPage movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesSearchView;
