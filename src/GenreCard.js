import React, { useState, useEffect } from "react";
import "./GenreCard.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function GenreCard({ title, fetchUrl, card }) {
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
    <div className="genre__card">
      <div className="genre__posters">
        {movies.map((movie) => {
          return (
            <div
              className="genre__conatiner"
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
              <p>Release Date : {movie.release_date || movie.first_air_date}</p>
              <p className="text">Rating : {movie.vote_average}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GenreCard;
