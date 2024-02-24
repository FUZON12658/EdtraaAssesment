import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import PokemonInfo from "./PokemonInfo";

export default function IndexPage() {
  const [searchQuery, setSearchQuery] = useState(""); // Define searchQuery state
  const host_url = import.meta.env.VITE_API_HOST
  useEffect(()=>{
    console.log(import.meta.env);
    console.log(host_url);
  })
  return (
    <>
      <NavBar />
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <PokemonInfo searchQuery={searchQuery} />
    </>
  );
}
