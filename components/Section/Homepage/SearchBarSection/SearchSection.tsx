import React from "react";

import SearchBar from "./SearchBar";
import OtherCategories from "./OtherCategories";

export default function Search() {
  return (
    <section className="max-w-7xl mx-auto my-5 flex justify-between">
      <OtherCategories />
      <SearchBar />
    </section>
  );
}
