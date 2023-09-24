import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

const Search = () => {
  const { searchTerm } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=cbb65750d5272f7a4bf6b73db8d86f1b&query=${searchTerm}&page=1`
      )
      .then((response) => {
        setMovieData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {movieData?.map((data, i) => {
          return <MovieCard key={data.id} id={data.id} data={data} />;
        })}
      </div>
    </>
  );
};

export default Search;
