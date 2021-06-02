import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Genre.css";
import { useHistory } from "react-router-dom";

function Genre({ genre, genreSelect, type }) {
  const [selectgenre, setgenre] = useState("");
  useEffect(() => {
    genreSelect(selectgenre, title);
  }, [selectgenre]);

  let obj = genre.find((obj) => obj.id == selectgenre);
  let title;
  try {
    title = obj.name;
  } catch (e) {
    console.log(e);
    title = "Suggestions";
  }

  const history = useHistory();
  const handleClick = () =>
    history.push(`${type}/genre/${title.toLowerCase()}`);

  return (
    <div className="genre">
      <select
        name="genre"
        className="genre__select"
        value={selectgenre}
        onChange={(e) => setgenre(e.target.value)}
      >
        <option value="">Select Genre</option>
        {genre.map((genre) => {
          return (
            <option className="genre__options" key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
      <Button onClick={handleClick}>Proceed</Button>
    </div>
  );
}

export default Genre;
