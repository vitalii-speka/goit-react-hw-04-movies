import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../index.css";
import BookPreview from "../BookPreview/BookPreview";

const BookList = ({ books, location }) => {
  return (
    <>
      <ul className="BookList">
        {books.map(({ id, imgUrl, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/books/${id}`,
                state: { from: location },
              }}
            >
              <BookPreview imgUrl={imgUrl} title={title} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(BookList);
