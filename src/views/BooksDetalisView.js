import React, { Component } from "react";
import Axios from "axios";
import routes from "../routes";

export class BooksDetalisView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,

    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;

    const response = await Axios.get(`http://localhost:4040/books/${bookId}`);
    // console.log(response.data);

    this.setState({ ...response.data });
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
    const { descr, author, imgUrl, title, genre } = this.state;

    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад
        </button>
        <h1>Страница одной книги {this.props.match.params.bookId}</h1>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>Жанр: {genre}</p>
        <p>{descr}</p>
      </div>
    );
  }
}

export default BooksDetalisView;
