import React from "react";
import SearchBox from "./SearchBox";
const TopBar = () => {
  return (
    <div className="flex w-full h-[5%] bg-[#232323]/50">
      <div className="flex w-full items-center mx-28 gap-10">
        <h1 className="text-xl text-white font-bold">Boyz Movie</h1>
        <SearchBox />
      </div>
    </div>
  );
};

export default TopBar;
