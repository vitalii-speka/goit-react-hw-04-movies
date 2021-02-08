import React, { Component } from "react";
import Axios from "axios";

import MovieDetailsPage from "../componets/MovieDetailsPage";
import Searchbar from "../componets/Searchbar";
import getQueryPatams from "../utils/getQueryPatams";

export class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { query } = getQueryPatams(this.props.location.search);

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

      this.setState({ movies: response.data.results });
    }
  }
  // fetchMovies = (query) => {
  //   const response = Axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US&query=${query}&page=1&include_adult=false`
  //   );

  //   this.setState({ movies: response.data.results });
  // };

  handleChangeQuery = (query) => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${query}`,
    });
    console.log(query);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />
        <MovieDetailsPage movies={this.state.movies} />

        {this.state.movies.length > 0 && (
          <Route
            path={`${match.path}/:movieId/cast`}
            render={(props) => {
              const movieId = Number(props.match.params.authorId);
              const movie = this.state.movies.find(
                (author) => author.id === movieId
              );
              // console.log(author.books);
              return (
                movie && (
                  <>
                    <h2>Книги автора: </h2>
                    {/* <BookList {...props} books={author.books} /> */}
                  </>
                )
              );
            }}
          />
        )}
      </>
    );
  }
}

export default MoviesPage;
