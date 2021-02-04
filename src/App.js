import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NotFoundView from "./views/NotFaundView";

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/authors">Authors</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route path="/books" component={BooksView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
