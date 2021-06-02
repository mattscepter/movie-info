import React, { useState, useEffect } from "react";
import requests from "./requests";
import axios from "./axios";
import "./Banner.css";
import { Button } from "@material-ui/core";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ page, card }) {
  const [movie, setmovie] = useState([]);
  const display = "visible";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `trending/${page}${requests[0].fetchbanner}`
      );
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [page]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${base_url}${
          movie?.backdrop_path || movie?.poster_path
        })`,
      }}
    >
      <div className="banner__contents">
        <h1>
          {movie?.title ||
            movie?.name ||
            movie?.original_title ||
            movie?.original_name}
        </h1>
        <h4>{truncate(movie?.overview, 250)}</h4>
        <Button onClick={() => card(movie, display)}>More Info</Button>
      </div>
    </header>
  );
}

export default Banner;
