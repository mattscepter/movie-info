import React, { useState, useHistory } from "react";
import "./GenrePage.css";
import requests from "./requests";
import Moviecard from "./Moviecard";
import GenreCard from "./GenreCard";

function GenrePage({ gen, type, title }) {
  const [movie, setMovie] = useState([]);
  const [disPlay, setdisplay] = useState("hidden");
  const card = (movie, display) => {
    setMovie(movie);
    setdisplay(display);
  };
  return (
    <div className="genre__page">
      <Moviecard movie={movie} display={disPlay} card={card} />
      <GenreCard
        title={title}
        fetchUrl={`${requests[type].genre}${gen}`}
        card={card}
      />
    </div>
  );
}

export default GenrePage;
