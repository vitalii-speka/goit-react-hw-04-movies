import React, { Component } from "react";
import Axios from "axios";
import routes from "../routes";

export class MoviesDetalisView extends Component {
  state = {
    releaseDate: null,
    id: null,
    imgUrl: null,
    title: null,
    popularity: null,
    poster_path: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    // const { bookId } = this.props.match.params;

    // const response = await Axios.get(`http://localhost:4040/books/${bookId}`);
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US`
    );
    console.log(response.data);

    this.setState({ ...response.data });
    console.log(`this.state`, this.state);
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    // метод 2020
    history.push(location?.state?.from || routes.books);

    //старый метод
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    // history.push(routes.books);
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
    const sliceDate = release_date.slice(0, 4);
    console.log(sliceDate);
    return (
      <>
        <div className="container-fluid">
          <button type="button" onClick={this.handleGoBack}>
            Вернуться назад
          </button>
          {/* <h1>Page one movie {this.props.match.params.bookId}</h1> */}
          {/* <h1>Page one movie </h1> */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width={300}
          />
          <h1>{`${title}(${release_date})`}</h1>
          {/* <h2> {`${title}(${releaseDate.slice(0, 4)})`}</h2> */}
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
