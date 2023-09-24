import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { AiFillStar } from "react-icons/ai";
import cartSlice, { addCart } from "../redux/cartSlice";
import { img404 } from "../assets";

const Info = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.cart.currentCart);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cbb65750d5272f7a4bf6b73db8d86f1b`
      )
      .then((response) => {
        setMovieData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = () => {
    dispatch(addCart(movieData));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex max-[640px]:flex-col max-[640px]:mt-[20vh] w-full gap-14 items-center justify-center">
      <div>
        <img
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
              : img404
          }
          alt="movie_img"
          className="object-cover h-100 w-50 max-[640px]:h-60 animate-slideleft"
        />
      </div>

      <div className="flex flex-col gap-5 w-[50vw] animate-slideleft2">
        <h2 className="text-3xl font-bold text-white">{movieData.title}</h2>
        <div className="flex items-center gap-2">
          <AiFillStar color="#FED900" />
          <p className="text-xl font-medium text-[#FED900]">
            {movieData.vote_average.toFixed(2)}
          </p>
        </div>

        <p className="text-xl font-medium text-gray-300">
          Genres: {movieData.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="text-xl font-medium text-gray-300/50">
          {movieData.overview}
        </p>
        <button
          onClick={() => {
            handleClick();
          }}
          className="bg-transparent hover:bg-[#FED900] text-[#FED900] font-semibold hover:text-black py-2 px-4 border border-[#FED900] hover:border-transparent rounded mt-10"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Info;
