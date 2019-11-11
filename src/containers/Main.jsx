import React from 'react'
import { getPopularMovies, getTopRatedMovies } from "../utils";
import FilmCard from '../components/FilmCard';

class Main extends React.Component {
  state = {
    popularMovies: "",
    topRatedMovies: ""
  };

  componentDidMount() {
    getPopularMovies().then(data => {
      console.log({data})
      this.setState({ popularMovies: data.results });
    });
    getTopRatedMovies().then(data => {
      this.setState({ topRatedMovies: data.results });
    });
  }

  renderFilmCards(films) {
    // console.log("film", films);
    return films.map(film => <FilmCard key={film.id} film={film} />)
  }

  render() {
    // console.log("state", this.state);
    const { popularMovies, topRatedMovies } = this.state;
    return (
      <div className="App">
        <header>
          <h3>WebMovies</h3>
        </header>
        <main>
          <div className="row-title">
            Popular Movies
          </div>
          <div className="film-row">
            {popularMovies && this.renderFilmCards(popularMovies)}
          </div>
          <div className="row-title">
            Top Rated Movies
          </div>
          <div className="film-row">
            {topRatedMovies && this.renderFilmCards(topRatedMovies)}
          </div>
        </main>
      </div>
    );
  }
  }

export default Main;
