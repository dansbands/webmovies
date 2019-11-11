import React from 'react'
import { getPopularMovies, getTopRatedMovies } from "../utils";
import { Link } from 'react-router-dom';

import FilmCard from '../components/FilmCard';

class Movie extends React.Component {


  render() {
    // console.log("state", this.state);
    // const { popularMovies, topRatedMovies } = this.state;
    return (
      <div className="App">
        <header>
          <Link className="main-title" to="/">
            <h3>WebMovies</h3>
          </Link>
        </header>
        <main>
          The Movie Container
        </main>
      </div>
    );
  }
}

export default Movie;
