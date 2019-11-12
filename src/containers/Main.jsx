import React from "react";
import { getPopularMovies, getTopRatedMovies } from "../utils";
import { Link } from "react-router-dom";

import FilmCard from "../components/FilmCard";

class Main extends React.Component {
  state = {
    popularMovies: "",
    topRatedMovies: ""
  };

  componentDidMount() {
    if (localStorage.popularMovies) {
      const data = JSON.parse(localStorage.getItem("popularMovies"));
      this.setState({ popularMovies: data });
    }
    if (localStorage.topRatedMovies) {
      const data = JSON.parse(localStorage.getItem("topRatedMovies"));
      this.setState({ topRatedMovies: data });
    }
    if (!localStorage.popularMovies || !localStorage.topRatedMovies) {
      this.fetchData();
    }
  }

  fetchData = () => {
    getPopularMovies().then(data => {
      const stringyData = JSON.stringify(data.results);
      localStorage.setItem("popularMovies", stringyData);
      this.setState({ popularMovies: data.results });
    });
    getTopRatedMovies().then(data => {
      const stringyData = JSON.stringify(data.results);
      localStorage.setItem("topRatedMovies", stringyData);
      this.setState({ topRatedMovies: data.results });
    });
  };

  renderFilmCards(films) {
    return films.map(film => <FilmCard key={film.id} film={film} />);
  }

  render() {
    // console.log("state", this.state);
    const { popularMovies, topRatedMovies } = this.state;
    return (
      <div className="App">
        <header>
          <Link className="main-title" to="/">
            <h3>WebMovies</h3>
          </Link>
        </header>
        <main>
          <div className="row-title">Popular Movies</div>
          <div className="film-row">
            {popularMovies && this.renderFilmCards(popularMovies)}
          </div>
          <div className="row-title">Top Rated Movies</div>
          <div className="film-row">
            {topRatedMovies && this.renderFilmCards(topRatedMovies)}
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
