import React, { useState } from "react";


const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="text-white md:flex-row flex-col flex">
      {/* <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 md:mt-10 mt-4  bg-primary md:w-[400px] border-b-2 border-b-secondary outline-none"
        placeholder="Search"
      />
      <button className="bg-secondary md:py-3 py-2 md:px-10 md:mt-10 mt-4 mx-3">Search</button> */}
    </div>
  );
};

export default Search;
