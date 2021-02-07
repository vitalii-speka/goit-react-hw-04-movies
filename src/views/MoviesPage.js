import React, { Component } from "react";
import Axios from "axios";

import MovieDetailsPage from "../componets/MovieDetailsPage";
import Searchbar from "../componets/Searchbar";

export class MoviesPage extends Component {
  state = {
    movies: [],
    searchName: "",
  };

  async componentDidMount() {
    // const response = await Axios.get(
    //   "https://api.themoviedb.org/3/search/movie?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US&query=Malcolm&page=1&include_adult=false"
    // );
    // console.log(response.data.results);
    // this.setState({ movies: response.data.results });
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevSearchName = prevState.searchName;
    const { searchName } = this.state;

    if (prevSearchName !== searchName) {
      // await this.setState({ loading: true, photos: [], page: 1 });

      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US&query=${searchName}&page=1&include_adult=false`
      );
      console.log(response.data.results);

      this.setState({ movies: response.data.results });

      // this.fetchProcessing(searchName);
    }
  }

  handleInputSubmit = (searchName) => {
    this.setState({ searchName });
  };

  render() {
    // const { match } = this.props;

    // console.log(match.url);
    return (
      <>
        <Searchbar onSubmit={this.handleInputSubmit} />
        <h1>Movies Page</h1>
        <MovieDetailsPage movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
