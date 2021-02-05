import React, { Component } from "react";
import Axios from "axios";

export class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await Axios.get("http://localhost:4040/authors");
    // console.log(response.data);

    this.setState({ authors: response.data });
  }

  render() {
    return (
      <>
        <h1>Это страница Авторов</h1>;
        <ul>
          {this.state.authors.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default AuthorsView;
