import React, { useState, useContext, useEffect } from "react";
import MovieContext from "./reducer/MovieContext";
import { searchMovies } from "./reducer/MovieActions";
import { toast } from "react-toastify";

function MovieSearch() {
  const [text, setText] = useState("");
  const { dispatch, loading } = useContext(MovieContext);


  const handleChange = async (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      toast.error("Insert smth");
      return;
    }
    dispatch({ type: "SET_LOADING" });
    const movies = await searchMovies(text);
    dispatch({
      type: "GET_MOVIES",
      payload: movies.movies,
    });

    setText("");
  };


  if (!loading) {
    return (
      <>
        <form onSubmit={handleSubmit} className="form-control">
          <input
            className="search-input"
            type="text"
            placeholder="The name of the movie?"
            value={text}
            onChange={handleChange}
          />
          <button className="search-button" type="submit">
            Find!
          </button>
        </form>
      </>
    );
  }
}

export default MovieSearch;
