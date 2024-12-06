import { FC } from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
  return (
    <div className="bg-black text-center rounded-lg shadow-md p-4 w-56">
      <div className="flex justify-center mb-3">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 object-contain"
        />
      </div>
      <p className="text-gray-400 text-sm">#{id}</p>
      <h2 className="text-white font-semibold text-lg">{name}</h2>
    </div>
  );
};

export default PokemonCard;
