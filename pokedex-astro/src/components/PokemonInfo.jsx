import React, { useState, useEffect } from "react";

export default function PokemonInfo({ searchQuery }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Check if data is present in cache
        const cachedData = localStorage.getItem("pokemonData");
        if (cachedData && !searchQuery) {
          // Parse cached data
          const cachedPokemons = JSON.parse(cachedData);
          setPokemons(cachedPokemons);
          return; // Exit early, no need to fetch from API
        }

        let url = "http://127.0.0.1:8000/v1/pokemons";
        if (searchQuery) {
          url += `?query=${encodeURIComponent(searchQuery)}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemons(data);

        // Cache the response for one hour
        localStorage.setItem("pokemonData", JSON.stringify(data));
        setTimeout(() => {
          // Clear cache after one hour
          localStorage.removeItem("pokemonData");
        }, 3600000); // One hour in milliseconds
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [searchQuery]);

  return (
    <div className="container my-12 mx-auto md:px-6">
      <section className="mb-32">
        <style>
          {`
            .zoom:hover img {
              transform: scale(1.1);
            }

            /* Add hover styles to remove tint and change text color */
            .zoom:hover .tint {
              background-color: transparent;
            }

            .zoom:hover .text-white {
              color: black;
            }
          `}
        </style>
        <h2 className="mb-12 text-center text-3xl font-bold">Pokemons</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src={pokemon.image_urls[0]} // Assuming the first image URL is the default one
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="tint absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h5 className="mb-3 text-lg font-bold">{pokemon.name}</h5>
                      <p className="text-white">
                        <small>Type: {pokemon.type}</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
