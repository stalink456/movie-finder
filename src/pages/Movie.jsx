import React, { useEffect, useContext } from "react";
import Spinner from "../components/layout/Spinner";
import MovieContext from "../components/reducer/MovieContext";
import { getMovieById } from "../components/reducer/MovieActions";
import { useParams } from "react-router-dom";

function Movie() {
  const { movie, loading, dispatch } = useContext(MovieContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getMovieData = async () => {
      const movieData = await getMovieById(params.id);
      dispatch({
        type: "GET_MOVIE",
        payload: movieData,
      });
    };

    getMovieData();
  }, [dispatch, params.id]);

  if (loading) {
    return <Spinner />;
  }

  const {
    description_full,
    torrents,
    id,
    large_cover_image,
    rating,
    runtime,
    title_long,
    year,
  } = movie;

  return (
    <div className="movie-container">
      <div className="downlaod-button">
        <img src={large_cover_image} alt="picture" />
        <button>
          <a href={torrents?.map((value) => value["url"])[0]} download>
            Download
          </a>
        </button>
      </div>
      <div className="block-text">
        <h2>{title_long}</h2>
        <p>
          Rating: <span>{rating}/10</span>
        </p>
        <p>
          Year of release: <span>{year}</span>
        </p>
        <p>
          Run time: <span>{runtime}</span> mins
        </p>
        <p>Description: {description_full}</p>
      </div>
    </div>
  );
}

export default Movie;
