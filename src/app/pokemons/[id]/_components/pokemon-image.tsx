import { FC } from "react";
import Image from "next/image";

interface PokemonImageProps {
  src?: string;
  alt?: string;
  size: number;
}

const PokemonImage: FC<PokemonImageProps> = ({ src, alt, size }) => {
  const fallbackImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Interrogation_mark_with_material_shadows.jpg";

  return (
    <Image
      src={src ?? fallbackImageUrl}
      alt={alt ?? "Unknown Pokémon"}
      width={size}
      height={size}
      className="object-contain"
    />
  );
};

export default PokemonImage;
