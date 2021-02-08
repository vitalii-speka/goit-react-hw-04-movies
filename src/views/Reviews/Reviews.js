import React, { Component } from "react";
import Axios from "axios";
import s from "./Reviews.module.css";

export class Reviews extends Component {
  state = {
    reviews: "",
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US&page=1`
    ).catch((error) => {
      console.log(error.response);
    });

    this.setState({ reviews: response.data.results });
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

//author: "SWITCH."
// author_details: {name: "SWITCH.", username: "maketheSWITCH", avatar_path: "/klZ9hebmc8biG1RC4WmzNFnciJN.jpg", rating: 7}
// content: "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen.
// ↵- Chris dos Santos
// ↵
// ↵Read Chris' full article...
// ↵https://www.maketheswitch.com.au/article/review-wonder-woman-1984-a-new-era-of-wonder-occasionally"
// created_at: "2020-12-18T14:08:08.440Z"
// id: "5fdcb7c82efe4e0040d7237c"
// updated_at: "2020-12-20T16:46:29.704Z"
// url: "https://www.themoviedb.org/review/5fdcb7c82efe4e0040d7237c"
