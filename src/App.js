import React from "react";
import "./App.css";
import { getPopularMovies, getTopRatedMovies } from "./utils";
import FilmCard from './components/FilmCard';

class App extends React.Component {
  state = {
    popularMovies: "",
    topRatedMovies: ""
  };

  componentDidMount() {
    getPopularMovies().then(data => {
      this.setState({ popularMovies: data.results });
    });
    getTopRatedMovies().then(data => {
      this.setState({ topRatedMovies: data.results });
    });
  }

  renderFilmCards(films) {
    console.log("film", films);
    return films.map(film => <FilmCard film={film} />)

  }

  render() {
    console.log("state", this.state);
    const { popularMovies, topRatedMovies } = this.state;
    return (
      <div className="App">
        <header>
          <h3>WebMovies</h3>
        </header>
        <main>
          <div className="film-row">
            {popularMovies && this.renderFilmCards(popularMovies)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
