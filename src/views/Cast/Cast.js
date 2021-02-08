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
    // console.log(response);
    this.setState({ casts: response.data.cast });
    // console.log(this.state.casts);
  }

  async componentDidUpdate(prevProps, prevState) {}

  render() {
    const { casts } = this.state;

    return (
      <>
        {casts.length > 0 && (
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
        )}
      </>
    );
  }
}

export default Cast;

// adult: false;
// cast_id: 2;
// character: "Tae-ho";
// credit_id: "5c616ab5c3a3684fabd5b13b";
// gender: 2;
// id: 150698;
// known_for_department: "Acting";
// name: "Song Joong-ki";
// order: 0;
// original_name: "Song Joong-ki";
// popularity: 5.685;
// profile_path: "/3piyvKFLJ9qRAE72ZV80gAiKFCp.jpg";
