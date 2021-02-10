import React, { Component } from "react";
import * as apiService from "../../api/api-service";
import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

export class HomePage extends Component {
  state = {
    trendingList: [],
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await apiService.showTrending();

      this.setState({ trendingList: response.data.results, loading: false });
    } catch (error) {
      return toast.error(`sorry, ${error.response.data.status_message}`);
    }
  }

  render() {
    const { match } = this.props;
    const { error, loading } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {loading && (
          <Loader type="Watch" color="#000" height={450} width={450} />
        )}

        {error && <p>{`Sorry, error:  ${error}`}</p>}
        <ul>
          {this.state.trendingList.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                to={`${match.url}movie/${id}`}
                className={s.a}
                activeClassName={s.a}
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
