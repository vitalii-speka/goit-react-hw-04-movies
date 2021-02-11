import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import * as apiService from "../../api/api-service";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

const Cast = lazy(() =>
  import("../Cast/Cast.js" /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews.js" /* webpackChunkName: "reviews-view" */)
);

export class MovieDetailsPage extends Component {
  state = {
    movie: [],
    loading: false,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({ loading: true });

    try {
      const response = await apiService.showMovieId(movieId);
      this.setState({ movie: response.data, loading: false });
    } catch (error) {
      this.setState({ loading: false });

      return toast.error(`sorry, ${error.response.data.status_message}`);
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movie, loading } = this.state;

    const { location, match } = this.props;

    return (
      <>
        <div className={s.containerFluid}>
          <button
            className={s.button}
            type="button"
            onClick={this.handleGoBack}
            >
            <span>Go back </span>
          </button>

          {loading && (
            <Loader type="Watch" color="#000" height={450} width={450} />
          )}

          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={320}
              height={240}
            />
          ) : (
            <img
              src={`http://dummyimage.com/320x240/99cccc/ffffff.gif&text=sorry, the poster is missing`}
              alt={movie.title}
              width={320}
            />
            )}
          
          <h1>{`${movie.title}(${movie.release_date})`}</h1>
          <p>
            <span className={s.textBold}>User score: </span>
            {`${movie.popularity}% `}
          </p>
          <p>
            <span className={s.textBold}>Overview: </span> {movie.overview}
          </p>
          {movie.length > 0 ? (
            <p>
              <span className={s.textBold}>Genres: </span>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </p>
          ) : (
            <p>
              <span className={s.textBold}>Genres: </span> non information
            </p>
          )}
        </div>
        <hr />
        <h2>Audition information:</h2>

        <ul>
          <li>
            <NavLink
              exact
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location?.state?.from || routes.home },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location?.state?.from || routes.home },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<h1>Load....</h1>}>
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
