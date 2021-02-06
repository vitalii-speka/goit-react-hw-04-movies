import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import HomeView from "./views/HomeView";
// import AuthorsView from "./views/AuthorsView";
// import BooksView from "./views/BooksView";
// import NotFoundView from "./views/NotFaundView";
// import BooksDetalisView from "./views/BooksDetalisView";
import routes from "./routes";
import AppBar from "./componets/AppBar";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const AuthorsView = lazy(() =>
  import("./views/AuthorsView.js" /* webpackChunkName: "authors-view" */)
);
const BooksView = lazy(() =>
  import("./views/BooksView.js" /* webpackChunkName: "books-view" */)
);
const BooksDetalisView = lazy(() =>
  import(
    "./views/BooksDetalisView.js" /* webpackChunkName: "books-details-view" */
  )
);
const NotFoundView = lazy(() =>
  import("./views/NotFaundView.js" /* webpackChunkName: "not-faund-view" */)
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Load....</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.authors} component={AuthorsView} />
        <Route exact path={routes.books} component={BooksView} />
        <Route exact path={routes.bookDetalis} component={BooksDetalisView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
