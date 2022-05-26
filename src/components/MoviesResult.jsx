import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import MovieContext from "./reducer/MovieContext";
import Spinner from "./layout/Spinner";
import { toast } from "react-toastify";

function MoviesResult() {
  const { movies, loading } = useContext(MovieContext);

  if (!movies && !loading) {
    toast.error("Can't find film");
  }

  if (!loading) {
    return (
      <>
        <div className="container">
          {movies &&
            movies.map((value) => (
              <MovieItem
                key={value.id}
                id={value.id}
                title={value.title}
                genres={value.genres}
                img={value.medium_cover_image}
                rating={value.rating}
                year={value.year}
              />
            ))}
        </div>
       
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default MoviesResult;
