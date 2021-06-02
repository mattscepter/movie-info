import React, { useState } from "react";
import Row from "./Row";
import requests from "./requests";
import Moviecard from "./Moviecard";
import Banner from "./Banner";

function List({ type }) {
  const [movie, setMovie] = useState([]);
  const [disPlay, setdisplay] = useState("hidden");

  const card = (movie, display) => {
    setMovie(movie);
    setdisplay(display);
  };

  return (
    <div>
      <Banner page={type == 0 ? "movie" : "tv"} card={card} />
      <Moviecard movie={movie} display={disPlay} card={card} />
      <Row
        title="Trending"
        fetchUrl={requests[type].fetchTrending}
        card={card}
      />
      <Row
        title={`Action & Adventure`}
        fetchUrl={requests[type].fetchAction}
        card={card}
      />
      <Row title="Comedy" fetchUrl={requests[type].fetchComedy} card={card} />
      <Row
        title={`Romance & Love`}
        fetchUrl={requests[type].fetchRomantic}
        card={card}
      />
      <Row title="Horror" fetchUrl={requests[type].fetchHorror} card={card} />
      <Row
        title="Documentaries"
        fetchUrl={requests[type].fetchDocumentaries}
        card={card}
      />
    </div>
  );
}

export default List;
