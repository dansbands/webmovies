import React from "react";
import { getPopularMovies, getTopRatedMovies } from "../utils";
import { Link } from "react-router-dom";

import FilmRow from "../components/FilmRow";

class Main extends React.Component {
  state = {
    popularMovies: "",
    topRatedMovies: ""
  };

  componentDidMount() {
    if (localStorage.popularMovies) {
      const data = JSON.parse(localStorage.getItem("popularMovies"));
      this.setState({ popularMovies: data });
    } else {
      this.fetchPopular();
    }
    if (localStorage.topRatedMovies) {
      const data = JSON.parse(localStorage.getItem("topRatedMovies"));
      this.setState({ topRatedMovies: data });
    } else {
      this.fetchTopRated();
    }
  }

  fetchPopular = () => {
    getPopularMovies().then(data => {
      if (data.results) {
        const stringyData = JSON.stringify(data.results);
        localStorage.setItem("popularMovies", stringyData);
        this.setState({ popularMovies: data.results });
      }
    });
  };

  fetchTopRated = () => {
    getTopRatedMovies().then(data => {
      if (data.results) {
        const stringyData = JSON.stringify(data.results);
        localStorage.setItem("topRatedMovies", stringyData);
        this.setState({ topRatedMovies: data.results });
      }
    });
  }

  render() {
    const { popularMovies, topRatedMovies } = this.state;
    return (
      <div className="App">
        <header>
          <Link className="main-title" to="/">
            <h3>WebMovies</h3>
          </Link>
        </header>
        <main>
          {popularMovies &&
            <FilmRow movies={popularMovies} title="Popular Movies" />
          }
          {topRatedMovies &&
            <FilmRow movies={topRatedMovies} title="Top Rated Movies" />
          }
          {!popularMovies && !topRatedMovies && (
            <div className="empty-state">
              <h1>No Films Available</h1>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default Main;
