import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from '../utils/constants.js'

const FilmCard = ({ film }) => {
  const width = "w200/"
  return (
    <div className="film-card">
      <Link to={`/movies/${film.id}`}>
        <img
          src={`${IMG_BASE_URL}${width}${film.poster_path}`}
          alt="poster"
          />
      </Link>
    </div>
  );
};

export default FilmCard;
