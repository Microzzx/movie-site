import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-600 focus-within:text-gray-400"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-1 flex-row w-[30vw] gap-5 justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="flex-1 bg-[#292929] rounded-md border-none outline-none placeholder-gray-500 text-base text-white p-1"
        />
      </div>
    </form>
  );
};

export default SearchBox;
