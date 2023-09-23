import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieSlide from "../components/MovieSlide";
import MovieCard from "../components/MovieCard";

const Discover = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=cbb65750d5272f7a4bf6b73db8d86f1b&query=a"
      )
      .then((response) => {
        setMovieData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (movieData.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(movieData);
  console.log(movieData[0].id);
  return (
    <div className="flex h-[90vh]">
      {/* <MovieSlide /> */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {movieData?.map((data, i) => {
          return <MovieCard key={data.id} id={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Discover;
