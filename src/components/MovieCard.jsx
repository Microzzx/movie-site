import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/info/${data.id}`);
  };

  return (
    <div
      className="flex flex-col gap-3 w-[250px] bg-[#121212] p-5 rounded-xl animate-slideleft"
      onClick={() => {
        handleClick();
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${
          data.poster_path || data.backdrop_path
        }`}
        alt="poster_image"
      />
      <h1 className="text-xl text-white font-bold text-center truncate">
        {data.title}
      </h1>
    </div>
  );
};

export default MovieCard;
