import React, { Component } from "react";
import Axios from "axios";

export class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get("http://localhost:4040/books");
    console.log(response.data);

    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1>Это страница книг</h1>
        <ul>
          {this.state.books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
