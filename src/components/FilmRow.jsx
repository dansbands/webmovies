import React, { Fragment } from 'react'
import FilmCard from "../components/FilmCard";


const FilmRow = ({ movies, title }) => {

  const renderFilmCards = (films) => {
    return films.map(film => <FilmCard key={film.id} film={film} />);
  }

  return (
    <Fragment>
      <div className="row-title">{title}</div>
      <div className="film-row">
        {movies && renderFilmCards(movies)}
      </div>
    </Fragment>
  )
}

export default FilmRow
