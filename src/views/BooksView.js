import React, { Component } from "react";
import Axios from "axios";

import BookList from "../componets/BookList";

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
    // const { match } = this.props;

    // console.log(match.url);
    return (
      <>
        <BookList books={this.state.books} />
      </>
    );
  }
}

export default BooksView;
