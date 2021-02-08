import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../index.css";
// import BookPreview from "../BookPreview/BookPreview";

const MovieList = ({ movies, location }) => {
  // console.log(movies);
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movie/${id}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(MovieList);
