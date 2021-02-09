import React, { Component } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

export class HomePage extends Component {
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
    const { match } = this.props;

    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.trendingList.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                to={`${match.url}movie/${id}`}
                className={s.textStyle}
                activeClassName={s.textStyleActive}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
