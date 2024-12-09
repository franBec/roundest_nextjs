import { FC } from "react";

interface PokemonCardProps {
  isPending?: boolean;
  id?: number;
  name?: string;
  imageUrl?: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ isPending, id, name, imageUrl }) => {
  if (isPending) {
    return (
      <div className="text-center rounded-lg shadow-2xl border-2 w-48 animate-pulse">
        <div className="flex justify-center mb-3">
          <div className="w-48 h-48 bg-gray-300 rounded-t-lg" />
        </div>
        <div className="px-4 py-2">
          <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-2" />
          <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="text-center rounded-lg shadow-2xl border-2 w-48">
      <div className="flex justify-center mb-3">
        <img
          src={
            imageUrl ??
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Interrogation_mark_with_material_shadows.jpg"
          }
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
