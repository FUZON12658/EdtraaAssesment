import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import PokemonInfo from "../components/PokemonInfo";

export default function IndexPage() {
  const [searchQuery, setSearchQuery] = useState(""); // Define searchQuery state

  return (
    <>
      <NavBar />
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <PokemonInfo searchQuery={searchQuery} />
    </>
  );
}
