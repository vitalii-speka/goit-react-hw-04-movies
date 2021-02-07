import React, { Component } from "react";
import Axios from "axios";
import routes from "../routes";

export class MoviesDetalisView extends Component {
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
    // console.log(movieId);

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US`
    );
    // console.log(response.data);

    this.setState({ ...response.data });
    // console.log(`this.state`, this.state);
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    // метод 2020
    history.push(location?.state?.from || routes.home);

    //старый метод
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    // history.push(routes.books);
  };
  getYear = () => {
    const date = this.state.release_date.getFullYear();
    console.log(date);
    // return date;
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
    // console.log(this.state);

    return (
      <>
        <div className="container-fluid">
          <button type="button" onClick={this.handleGoBack}>
            Вернуться назад
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

          {/* {release_date && <h2>{`${release_date.getFullYear()}`}</h2>} */}
          <h1>{`${title}(${release_date})`}</h1>
          {/* <h1>{`${title}(${this.getYear()})`}</h1> */}
          <p>{`User score: ${popularity}% `}</p>
          <p>Overview {overview}</p>
          {genres && (
            <p>
              Genres:
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </p>
          )}
          <p>Audition information: </p>
        </div>
      </>
    );
  }
}

export default MoviesDetalisView;
