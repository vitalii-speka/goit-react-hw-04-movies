import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Axios from "axios";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() =>
  import("../Cast/Cast.js" /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews.js" /* webpackChunkName: "reviews-view" */)
);

export class MovieDetailsPage extends Component {
  state = {
    release_date: null,
    id: null,
    imgUrl: null,
    title: null,
    popularity: null,
    poster_path: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US`
    );

    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      title,
      poster_path,
      overview,
      popularity,
      genres,
      release_date,
    } = this.state;

    return (
      <>
        <div className={s.containerFluid}>
          <button type="button" onClick={this.handleGoBack}>
            Go back
          </button>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width={320}
              height={240}
            />
          ) : (
            <img
              src={`http://dummyimage.com/320x240/99cccc/ffffff.gif&text=sorry, the poster is missing`}
              alt={title}
              width={320}
            />
          )}

          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          {/* <h1>{`${title}(${release_date})`}</h1> */}
          <p>
            <span className={s.textBold}>User score: </span>
            {`${popularity}% `}
          </p>
          <p>
            <span className={s.textBold}>Overview: </span> {overview}
          </p>
          {genres.length > 0 ? (
            <p>
              <span className={s.textBold}>Genres: </span>
              {genres.map(({ id, name }) => (
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
              // to={`/movie/:movieId/cast`}
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: { from: this.props.location },
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
