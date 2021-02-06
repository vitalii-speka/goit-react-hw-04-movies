import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NotFoundView from "./views/NotFaundView";
import BooksDetalisView from "./views/BooksDetalisView";
import routes from "./routes";
import AppBar from "./componets/AppBar";

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route path={routes.authors} component={AuthorsView} />
      <Route exact path={routes.books} component={BooksView} />
      <Route exact path={routes.bookDetalis} component={BooksDetalisView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
