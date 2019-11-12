import React from "react";
import { getMovieById } from "../utils";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../utils/constants.js";
import ModalVideo from "react-modal-video";
import RatingsWidget from '../components/RatingsWidget'

class Movie extends React.Component {
  state = { movie: "", isOpen: false, videoId: null };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    getMovieById(id).then(data => {
      this.setState({ movie: data });
      if (data.videos && data.videos.results && data.videos.results.length) {
        this.setState({ videoId: data.videos.results[0].key });
      }
    });
  }

  handlePlay = e => {
    this.setState({ isOpen: true });
  };

  render() {
    console.log("state", this.state);
    const { movie } = this.state;
    const width = "w400/";
    const url = `url(${IMG_BASE_URL}w500${movie.backdrop_path}) no-repeat center center fixed`;

    return (
      <div className="App">
        <header>
          <Link className="main-title" to="/">
            <h3>WebMovies</h3>
          </Link>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={this.state.videoId}
            onClose={() => this.setState({ isOpen: false })}
            />
        </header>
        <main>
          {movie && (
            <div
              className="movie-container"
              style={{
                background: url,
                WebkitBackgroundSize: "cover",
                backgroundColor: "rgba(0,0,0,0.7)"
              }}
            >
              <div className="movie-info">
                <h1>{movie.title}</h1>
                <h3>{movie.tagline}</h3>
                <p>{movie.overview}</p>
                <p>{movie.runtime} minutes</p>
                <p>Users rated: {" "}
                  <RatingsWidget rating={movie.vote_average} />
                   {" "} {movie.vote_average/2} out of five stars. </p>
              </div>
              {this.state.videoId ? (
                <div className="controls" onClick={this.handlePlay}>
                  <i className="material-icons">play_circle_outline</i>
                </div>
              ) : (
                <div className="controls-disabled">
                  <h3>Coming Soon!</h3>
                </div>
              )}
              <div className="movie-poster">
                <img
                  src={`${IMG_BASE_URL}${width}${movie.poster_path}`}
                  alt="poster"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default Movie;
