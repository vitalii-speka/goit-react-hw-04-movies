import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../index.css";
// import BookList from "../componets/BookList";

export class HomeView extends Component {
  state = {
    trendingList: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=66851c2d78ce86a1843cb2ac55e2da92"
    );

    this.setState({ trendingList: response.data.results });
  }

  render() {
    console.log(this.state.trendingList);
    const { match } = this.props;

    return (
      <>
        <h1>Trending today</h1>;
        <ul>
          {this.state.trendingList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${match.url}movie/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
