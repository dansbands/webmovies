import React, { Fragment } from "react";
import { getMovieById } from "../utils";
import { Link } from "react-router-dom";
import { IMG_BASE_URL, API_KEY } from '../utils/constants.js'

import FilmCard from "../components/FilmCard";

class Movie extends React.Component {
  state = { movie: "" };

  componentDidMount() {
    const { match:
      {
        params: { id },
      }
    } = this.props;

    getMovieById(id)
    .then(data => {
      console.log({data})
      this.setState({ movie: data });
    })
  }

  handlePlay = e => {
    alert("play");
  }

  render() {
    // console.log("props", this.props);
    const { movie } = this.state;
    const width = "w400/";
    const url = `url(${IMG_BASE_URL}w500${movie.backdrop_path}) no-repeat center center fixed`
    // console.log(url);
    // console.log({movie});
    // poster image, title, synopsis, duration and rating
    return (
      <div className="App">
        <header>
          <Link className="main-title" to="/">
            <h3>WebMovies</h3>
          </Link>
        </header>
        <main>
          {movie &&
            <div className="movie-container" style={{ 'background': url, 'WebkitBackgroundSize': 'cover', 'backgroundColor': 'rgba(0,0,0,0.7)'  }} >
              <div className="movie-info">
                <h1>{movie.title}</h1>
                <h3>{movie.tagline}</h3>
                <p>{movie.overview}</p>
                <p>{movie.runtime} minutes</p>
                <p>Users rated: {movie.vote_average/2} out of five stars. </p>
              </div>
              <div className="controls" onClick={this.handlePlay}>
                <i className="material-icons">play_circle_outline</i>
              </div>
              <div className="movie-poster">
                <img src={`${IMG_BASE_URL}${width}${movie.poster_path}`} alt="poster" />
              </div>
            </div>
          }


        </main>
      </div>
    );
  }
}

export default Movie;
