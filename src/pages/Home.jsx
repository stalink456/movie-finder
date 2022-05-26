import React from "react";
import MovieSearch from "../components/MovieSearch";
import MoviesResult from "../components/MoviesResult"; 

const Home = () => {
  return (
    <>
      <MovieSearch /> <MoviesResult />
    </>
  );
};

export default Home;
