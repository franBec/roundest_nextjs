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
    size: 150,
    enableSorting: false,
  }),
  columnHelper.accessor("id", {
    header: () => "#",
    size: 50,
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
    size: 100,
  }),
  columnHelper.accessor("votes", {
    header: () => "Votes",
    size: 100,
  }),
];
