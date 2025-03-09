import React from "react";

import SearchBar from "./SearchBar";
import OtherCategories from "./OtherCategories";

export default function Search() {
  return (
    <section className="max-w-7xl mx-auto px-5 my-5 flex justify-between w-full">
      <OtherCategories />
      <SearchBar />
    </section>
  );
}
