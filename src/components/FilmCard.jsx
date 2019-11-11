import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <Link to={`/movies/${film.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
          alt="poster"
          />
      </Link>
    </div>
  );
};

export default FilmCard;
