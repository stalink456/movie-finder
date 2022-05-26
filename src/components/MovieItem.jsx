import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ id, title, genres, img, rating, year }) => {
  return (
    <div className="block">
      <img src={img} alt="picture" />
      <div className="block-text">
        <h2>{title}</h2>
        <p>
          Genries:
          {genres.map((item, index) => {
            return <span key={index}>{(index ? ", " : "") + item}</span>;
          })}
        </p>
        <p>
          Rating: <span>{rating}/10</span>
        </p>
        <p>
          Year of release: <span>{year}</span>
        </p>
        <Link className="link" to={`/movie/${id}`}>
          More information
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
