import React, { Component } from "react";
import * as apiService from "../../api/api-service";
import s from "./Reviews.module.css";
import { toast } from "react-toastify";

export class Reviews extends Component {
  state = {
    reviews: "",
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    try {
      const response = await apiService.showreviews(movieId);

      this.setState({ reviews: response.data.results });
    } catch (error) {
      return toast.error(`sorry, ${error.response.data.status_message}`);
    }
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content, author_details }) => (
              <li className={s.item} key={id}>
                <div className={s.author}>author: {author}</div>
                <div className={s.content}>content: {content}</div>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default Reviews;
