import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
// const AuthorsView = lazy(() =>
//   import("./views/AuthorsView.js" /* webpackChunkName: "authors-view" */)
// );
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movie-view" */)
);
// const BooksDetalisView = lazy(() =>
//   import(
//     "./views/BooksDetalisView.js" /* webpackChunkName: "books-details-view" */
//   )
// );
const MoviesDetalisView = lazy(() =>
  import(
    "./views/MoviesDetalisView.js" /* webpackChunkName: "movies-details-view" */
  )
);
const NotFoundView = lazy(() =>
  import("./views/NotFaundView.js" /* webpackChunkName: "not-faund-view" */)
);
console.log(routes.movieDetalis);
const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Load....</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        {/* <Route path={routes.authors} co/>mponent={AuthorsView} /> */}
        {/* <Route path={routes.books} component={BooksView} /> */}
        <Route exact path={routes.movie} component={MoviesPage} />
        <Route exact path={routes.moviesSearch} component={MoviesPage} />
        <Route exact path={routes.movieDetalis} component={MoviesDetalisView} />
        {/* <Route path={routes.bookDetalis} component={BooksDetalisView} /> */}
        <Route exact component={NotFoundView} />
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
