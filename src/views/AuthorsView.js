import React, { Component } from "react";
import Axios from "axios";
import { Link, Route } from "react-router-dom";
import "../index.css";
import BookList from "../componets/BookList";

export class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    // const response = await Axios.get(
    //   // " http://localhost:4040/authors?_embed=books"
    //   "https://api.themoviedb.org/3/movie/550?api_key=66851c2d78ce86a1843cb2ac55e2da92"
    // );
    const response = await Axios.get(
      // " http://localhost:4040/authors?_embed=books"
      `https://api.themoviedb.org/3/movie/550?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US`
    );
    //api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

    console.log(response);
    console.log(response.data);

    // this.setState({ authors: response.data });
  }

  render() {
    // console.log(this.props.match.url);
    const { match } = this.props;

    return (
      <>
        <h1>Это страница Авторов</h1>;
        <ul>
          {this.state.authors.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        {this.state.authors.length > 0 && (
          <Route
            path={`${match.path}/:authorId`}
            render={(props) => {
              const bookId = Number(props.match.params.authorId);
              const author = this.state.authors.find(
                (author) => author.id === bookId
              );
              // console.log(author.books);
              return (
                author && (
                  <>
                    <h2>Книги автора: {author.name}</h2>
                    <BookList {...props} books={author.books} />
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

export default AuthorsView;
