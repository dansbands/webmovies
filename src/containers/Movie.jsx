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

  render() {
    // console.log("props", this.props);
    const { movie } = this.state;
    const width = "w400/";
    const url = `url(${IMG_BASE_URL}w500${movie.backdrop_path}) no-repeat center center fixed`
    // console.log(url);
    // console.log({movie});
    return (
      <div className="App">
        <header>
          <Link className="main-title" to="/">
            <h3>WebMovies</h3>
          </Link>
        </header>
        <main>
          {movie &&
            <div className="movie-container" style={{ 'background': url, '-webkit-background-size': 'cover', 'backgroundColor': 'rgba(0,0,0,0.7)'  }} >
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <h5>{movie.tagline}</h5>
                <h5>{movie.release_date}</h5>
                <p>{movie.overview}</p>
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
