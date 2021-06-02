import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, card }) => {
  const [movies, setMovies] = useState([]);
  const display = "initial";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="container"
              onClick={() => card(movie, display)}
            >
              <img
                key={movie.id}
                className="row__poster"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
              <h2>
                {movie.title ||
                  movie.name ||
                  movie.original_title ||
                  movie.original_name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
