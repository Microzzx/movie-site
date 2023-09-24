import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import AiFillStar from "react-icons/ai";
const Info = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cbb65750d5272f7a4bf6b73db8d86f1b`
      )
      .then((response) => {
        setMovieData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(movieData);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex w-full gap-14 ">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt="movie_img"
          className="object-cover h-100 w-50 "
        />
      </div>

      <div className="flex flex-col gap-5 w-[50vw] ">
        <h2 className="text-3xl font-bold text-white">{movieData.title}</h2>
        <AiFillStar />
        <p className="text-xl font-medium text-gray-300">
          Genres: {movieData.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="text-xl font-medium text-gray-300">
          {movieData.overview}
        </p>
      </div>
    </div>
  );
};

export default Info;
