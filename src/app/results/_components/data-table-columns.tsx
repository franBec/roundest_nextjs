import { Pokemon } from "@/__generated__/api/roundest/model";
import { createColumnHelper } from "@tanstack/react-table";
import PokemonImage from "@/components/pokemon/pokemon-image";

const columnHelper = createColumnHelper<Pokemon>();
export const columns = [
  columnHelper.display({
    id: "spriteUrl",
    header: () => "Pokémon",
    cell: cellContext => {
      const spriteUrl = cellContext.row.original.spriteUrl;
      const name = cellContext.row.original.name;
      return <PokemonImage src={spriteUrl} alt={name} size={52} />;
    },
  }),
  columnHelper.accessor("id", {
    header: () => "#",
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
  }),
  columnHelper.accessor("votes", {
    header: () => "Votes",
  }),
];
