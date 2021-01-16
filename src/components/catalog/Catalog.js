import React from "react";
import "./Catalog.css";
import MovieCard from "../movieCard/MovieCard";
import { movies, getMovies } from "../../data";

const Catalog = (props) => {
  const moviesToDisplay = props.term ? getMovies(props.term) : movies;

  return (
    <div className="catalog">
      {moviesToDisplay.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </div>
  );
};

export default Catalog;
