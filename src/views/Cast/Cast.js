import React, { Component } from "react";
import Axios from "axios";
import s from "./Cast.module.css";

export class Cast extends Component {
  state = {
    casts: "",
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=66851c2d78ce86a1843cb2ac55e2da92&language=en-US`
    );

    this.setState({ casts: response.data.cast });
  }

  async componentDidUpdate(prevProps, prevState) {}

  render() {
    const { casts } = this.state;

    return (
      <>
        {casts.length > 0 ? (
          <ul>
            {casts.map(({ id, name, profile_path, character }) => (
              <li className={s.item} key={id}>
                {profile_path ? (
                  <img
                    className={s.img}
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}?api_key=66851c2d78ce86a1843cb2ac55e2da92`}
                    alt={name}
                    width={320}
                    height={240}
                  />
                ) : (
                  <img
                    src={`http://dummyimage.com/320x240/99cccc/ffffff.gif&text=sorry, the poster is missing`}
                    alt={name}
                    width={320}
                  />
                )}

                <div className={s.name}>{name}</div>
                <div className={s.character}>Character: {character}</div>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>cast not known </p>
        )}
      </>
    );
  }
}

export default Cast;
