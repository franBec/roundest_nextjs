import { Pokemon } from "@/__generated__/api/roundest/model";
import { createColumnHelper } from "@tanstack/react-table";
import PokemonImage from "@/app/pokemons/[id]/_components/pokemon-image";
import Link from "next/link";

const columnHelper = createColumnHelper<Pokemon>();
const columns = [
  columnHelper.display({
    id: "spriteUrl",
    header: () => "Pokémon",
    cell: cellContext => {
      const spriteUrl = cellContext.row.original.spriteUrl;
      const name = cellContext.row.original.name;
      return <PokemonImage src={spriteUrl} alt={name} size={52} />;
    },
    enableSorting: false,
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
  columnHelper.display({
    id: "actions",
    header: () => "Actions",
    cell: cellContext => {
      const id = cellContext.row.original.id;
      return (
        <Link
          href={`/pokemons/${id}`}
          className="text-primary no-underline hover:underline transition-all duration-200"
        >
          {"More info..."}
        </Link>
      );
    },
  }),
];

export default columns;
