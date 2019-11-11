import React from 'react'
import PropTypes from 'prop-types'

const FilmCard = ({film}) => {
  return (
    <div className="film-card">
      {/*
        <h1>{film.title}</h1>

        */}
      <img src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} alt="poster"/>
    </div>
  );
}

export default FilmCard;
