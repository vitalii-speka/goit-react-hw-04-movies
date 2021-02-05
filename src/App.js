import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NotFoundView from "./views/NotFaundView";
import BooksDetalisView from "./views/BooksDetalisView";

const App = () => (
  <>
    <ul>
      <li>
        <Link exact to="/">
          Home
        </Link>
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
      <Route exact path="/books" component={BooksView} />
      <Route path="/books/:bookId" component={BooksDetalisView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
