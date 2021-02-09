import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "../../index.css";

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

MovieList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default withRouter(MovieList);
