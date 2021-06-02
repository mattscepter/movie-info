import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Moviecard.css";
import CancelIcon from "@material-ui/icons/Cancel";

const base_url = "https://image.tmdb.org/t/p/original/";

function Moviecard({ movie, display, card }) {
  const [scroll, setScroll] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });
  let opacity = display == "hidden" ? "0" : "1";

  return (
    <div
      className="movie__card"
      style={{
        visibility: display,
        opacity: opacity,
        top: scroll + 120,
      }}
    >
      <div className="card">
        <Button
          onClick={() => {
            display = "hidden";
            card(movie, display);
          }}
        >
          <CancelIcon className="cancel__icon" />
        </Button>
        <img
          key={movie.id}
          src={`${base_url}${movie.backdrop_path}`}
          alt={movie.name}
        />
        <h2>
          {movie.title ||
            movie.name ||
            movie.original_title ||
            movie.original_name}
        </h2>
        <p>Release Date : {movie.release_date || movie.first_air_date}</p>
        <p>Rating : {movie.vote_average}</p>
        <p className="text">{movie.overview}</p>
      </div>
    </div>
  );
}

export default Moviecard;
