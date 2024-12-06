import React from "react";
import PokemonCard from "@/components/pokemon/pokemon-card";

const Vote = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <PokemonCard
        id={705}
        name="Sliggoo"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png"
      />
    </div>
  );
};
export default Vote;
