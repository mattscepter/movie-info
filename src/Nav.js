import React from "react";
import { Button } from "@material-ui/core";
import "./Nav.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { NavLink, useHistory } from "react-router-dom";
import Genre from "./Genre";

function Nav({ Type, loc, genre, genreSelect, type, title }) {
  const history = useHistory();

  return (
    <div className="nav">
      {loc == "Home" ? (
        <div className="butt">
          <NavLink
            exact
            to="/movie-info"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none",
            }}
            className="nav__link"
          >
            <h2>HOME</h2>
          </NavLink>

          <NavLink
            to="/movies"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none",
            }}
            className="nav__link"
          >
            <h2
              onClick={() => {
                Type(0);
              }}
            >
              MOVIES
            </h2>
          </NavLink>
          <NavLink
            to="/tv"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none",
            }}
            className="nav__link"
          >
            <h2 onClick={() => Type(1)}>TV SERIES</h2>
          </NavLink>
          {type != "home" ? (
            <Genre
              className="nav__genre"
              genre={genre}
              genreSelect={genreSelect}
              type={type}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <>
          <Button className="back__button" onClick={history.goBack}>
            <NavigateBeforeIcon
              className="nav__icon"
              style={{ color: "white", fontSize: "50px", marginLeft: "20px" }}
            />
          </Button>
          <p
            style={{
              transform: "translateX(-50%)",
              left: "50%",
              position: "absolute",
              color: "white",
              fontSize: "30px",
              fontWeight: "300",
            }}
          >
            {title}
          </p>
        </>
      )}
    </div>
  );
}

export default Nav;
