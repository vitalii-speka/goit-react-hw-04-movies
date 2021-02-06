import React, { Component } from "react";
import Axios from "axios";
import { Link, Route } from "react-router-dom";
import "../index.css";
import AuthorBooks from "../componets/AuthorBooks";

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
    console.log(this.props.match.url);
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
        <Route
          path={`${match.path}/:authorId`}
          component={AuthorBooks}
          render={(props) => (
            <AuthorBooks {...props} authors={this.state.authors} />
          )}
        />
      </>
    );
  }
}

export default AuthorsView;
