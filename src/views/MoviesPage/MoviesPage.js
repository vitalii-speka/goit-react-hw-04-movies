import React, { Component } from "react";
import * as apiService from "../../api/api-service";

import MovieList from "../../componets/MovieList";
import Searchbar from "../../componets/Searchbar";
import getQueryPatams from "../../utils/getQueryPatams";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

export class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  async componentDidMount() {
    const { query } = getQueryPatams(this.props.location.search);

    console.log(`query  - `, query);

    if (query) {
      console.log(`if query  - `, query);
      try {
        const response = await apiService.showMovieQuery(query);
        console.log(`response  - `, response);

        this.setState({ movies: response.data.results, loading: false });
        console.log(`this.state.movie  - `, this.state.movie);
      } catch (error) {
        console.log(`error`);
        // return toast.error(`sorry, ${error.response.data.status_message}`);
      }
    }
  }

  async componentDidUpdate(prevProps, prevState) {

    
    const { query: prevQuery } = getQueryPatams(prevProps.location.search);
    const { query: nextQuery } = getQueryPatams(this.props.location.search);
    console.log(`prevQuery  - `, prevQuery);
    console.log(`nextQuery  - `, nextQuery);
    console.log(`prevQuery !== nextQuery  - `, prevQuery !== nextQuery);

    try {
      if (prevQuery !== nextQuery) {
        const response = await apiService.showMovieQuery(nextQuery);
        
        if (response.data.results.length === 0) {
          return toast.info("please, enter your request");
        }
        this.setState({ loading: true });

        this.setState({ movies: response.data.results, loading: false });
        // this.setState({ movies: response.data.results });
      }
    } catch (error) {
      return toast.error(`sorry, ${error.response.data.status_message}`);
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />
        {loading && (
          <Loader type="Watch" color="#000" height={400} width={400} />
        )}

        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
