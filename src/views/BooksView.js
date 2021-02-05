import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../index.css";

export class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get("http://localhost:4040/books");
    // console.log(response.data);

    this.setState({ books: response.data });
  }

  render() {
    const { match } = this.props;

    console.log(match.url);
    return (
      <>
        <h1>Это страница книг</h1>
        <ul>
          {this.state.books.map(({ id, title, imgUrl }) => (
            <li key={id}>
              <div className="oneBooks">
                <Link to={`${match.url}/${id}`}>{title}</Link>
                <img src={imgUrl} alt={title} />
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
