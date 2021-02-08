import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routes";
import AppBar from "./componets/AppBar";

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-view" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movie-view" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.js" /* webpackChunkName: "movies-details-view" */
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
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movie} component={MoviesPage} />
        <Route path={routes.movieDetalis} component={MovieDetailsPage} />
        {/* <Redirect to={routes.home} /> */}
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default App;
