import "./App.css";
import List from "./List";
import requests from "./requests";
import axios from "./axios";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GenrePage from "./GenrePage";
import Footer from "./Footer";

function App() {
  const [Title, setTitle] = useState("");
  const [gen, setgen] = useState(0);
  const [genre, setGenre] = useState([]);
  const [type, setType] = useState(0);
  const Type = (tYPE) => {
    setType(tYPE);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests[type].fetchGenre);
      console.log(request.data.genres);
      setGenre(request.data.genres);
      console.log(request);
      return request;
    }
    fetchData();
  }, [requests[type].fetchGenre, type]);

  const genreSelect = (selectgenre, title) => {
    setTitle(title);
    setgen(selectgenre);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/movie-info">
            <Nav Type={Type} loc="Home" type="home" />
            <List type={2} />
          </Route>

          <Route exact path="/movies">
            <Nav
              Type={Type}
              loc="Home"
              genre={genre}
              genreSelect={genreSelect}
            />
            <List type={0} />
          </Route>
          <Route exact path="/tv">
            <Nav
              Type={Type}
              loc="Home"
              genre={genre}
              genreSelect={genreSelect}
              type="tv"
            />
            <List type={1} />
          </Route>
          <Route exact path="/:id/genre/:id">
            <Nav loc="gen" title={Title} />
            <GenrePage gen={gen} type={type} title={Title} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
