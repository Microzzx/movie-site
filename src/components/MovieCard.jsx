import React from "react";

const MovieCard = ({ id, data }) => {
  return (
    <div className="flex flex-col gap-3 w-[250px] bg-[#121212] p-5 rounded-xl animate-slideleft">
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="poster_image"
      />
      <h1 className="text-xl text-white font-bold text-center truncate">
        {data.title}
      </h1>
    </div>
  );
};

export default MovieCard;
