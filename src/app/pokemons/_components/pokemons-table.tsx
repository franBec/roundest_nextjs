import { PokemonsReactTable } from "@/app/pokemons/_components/pokemons-react-table";
import { TablePagination } from "@/components/table-pagination/table-pagination";
import { Pokemon } from "@/__generated__/api/roundest/model";

interface PokemonDataTableProps {
  data: Pokemon[];
  onPageChange: (pageNumber: number) => void;
  onSort: (property: string, direction: string) => void;
  pageNumber: number;
  sortDirection?: string;
  sortProperty?: string;
  totalPages?: number;
}

export const PokemonsTable = ({
  data,
  onPageChange,
  onSort,
  pageNumber,
  sortDirection,
  sortProperty,
  totalPages,
}: PokemonDataTableProps) => {
  return (
    <div className="space-y-4">
      <PokemonsReactTable
        data={data}
        onSort={onSort}
        sortProperty={sortProperty}
        sortDirection={sortDirection}
      />
      {totalPages && (
        <TablePagination
          onPageChange={onPageChange}
          pageNumber={pageNumber}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};
