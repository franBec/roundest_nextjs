import { FC } from "react";
import PokemonImage from "@/app/pokemons/[id]/_components/pokemon-image";

interface PokemonCardProps {
  id?: number;
  name?: string;
  imageUrl?: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
  return (
    <div className="text-center rounded-lg shadow-2xl border-2 w-48">
      <div className="flex justify-center mb-3">
        <PokemonImage src={imageUrl} alt={name} size={192} />
      </div>
      <p className="text-gray-400 text-sm">#{id ?? "-"}</p>
      <h2 className="font-semibold text-lg">{name ?? "-"}</h2>
    </div>
  );
};

export default PokemonCard;
