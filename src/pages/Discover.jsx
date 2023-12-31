import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieSlide from "../components/MovieSlide";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

const Discover = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=cbb65750d5272f7a4bf6b73db8d86f1b&page=1&certification_country=thailand"
      )
      .then((response) => {
        setMovieData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (movieData.length === 0) {
    return <Loading />;
  }

  return (
    <>
      {/* <MovieSlide /> */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {movieData?.map((data, i) => {
          return <MovieCard key={data.id} id={data.id} data={data} />;
        })}
      </div>
    </>
  );
};

export default Discover;
