import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { BsFillCartFill } from "react-icons/bs";
const TopBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/payment");
  };

  return (
    <div className="flex w-full h-[5%] bg-[#232323]/50">
      <div className="flex w-full items-center mx-32 gap-5">
        <h1
          className="text-xl text-white font-bold"
          onClick={() => {
            handleLogoClick();
          }}
        >
          Boyz Movie
        </h1>
        <SearchBox />
        <div className="flex flex-1 ">
          <BsFillCartFill
            color="white"
            size={20}
            onClick={() => {
              handleCartClick();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
