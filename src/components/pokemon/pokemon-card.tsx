import { FC } from "react";

interface PokemonCardProps {
  id?: number;
  name?: string;
  imageUrl?: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
  return (
    <div className="text-center rounded-lg shadow-2xl border-2 w-48">
      <div className="flex justify-center mb-3">
        <img
          src={imageUrl ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Interrogation_mark_with_material_shadows.jpg"}
          alt={name ?? "Unknown Pokémon"}
          className="w-48 h-48 object-contain"
        />
      </div>
      <p className="text-gray-400 text-sm">#{id ?? "-"}</p>
      <h2 className="font-semibold text-lg">{name ?? "-"}</h2>
    </div>
  );
};

export default PokemonCard;