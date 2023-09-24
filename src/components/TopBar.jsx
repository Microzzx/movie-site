import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { BsFillCartFill } from "react-icons/bs";
const TopBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex w-full h-[5%] bg-[#232323]/50">
      <div className="flex w-full items-center mx-32 gap-5">
        <h1
          className="text-xl text-white font-bold"
          onClick={() => {
            handleClick();
          }}
        >
          Boyz Movie
        </h1>
        <SearchBox />
        <div className="flex flex-1 ">
          <BsFillCartFill color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
