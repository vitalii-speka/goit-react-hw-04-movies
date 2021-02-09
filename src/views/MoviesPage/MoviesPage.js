import React, { Component } from "react";
import Axios from "axios";

import MovieList from "../../componets/MovieList";
import Searchbar from "../../componets/Searchbar";
import getQueryPatams from "../../utils/getQueryPatams";
import { toast } from "react-toastify";

export class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { query } = getQueryPatams(this.props.location.search);
    // console.log(query);
    if (query) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US&query=${query}&page=1&include_adult=false`
      );

      this.setState({ movies: response.data.results });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryPatams(prevProps.location.search);
    const { query: nextQuery } = getQueryPatams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      // await this.fetchMovies(nextQuery);

      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US&query=${nextQuery}&page=1&include_adult=false`
      );

      if (response.data.results.length === 0) {
        return toast.info("please, enter your request");
      }

      this.setState({ movies: response.data.results });
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />

        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
