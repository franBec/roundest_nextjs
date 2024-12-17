import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Pokemon } from "@/__generated__/api/roundest/model";
import columns from "@/app/pokemons/_components/pokemons-react-table-columns-helper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataTableProps {
  data: Pokemon[];
  sortProperty?: string;
  sortDirection?: string;
  onSort: (property: string, direction: string) => void;
}

const PokemonsReactTable = ({
  onSort,
  sortDirection,
  sortProperty,
  data,
}: DataTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const columnId = header.column.id;
                const isSorted = sortProperty === columnId;
                const canSort = header.column.getCanSort();

                return (
                  <TableHead key={header.id} className="cursor-pointer">
                    {canSort ? (
                      <Button
                        onClick={() =>
                          onSort(
                            columnId,
                            sortDirection === "asc" ? "desc" : "asc"
                          )
                        }
                        variant="ghost"
                      >
                        <span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                        <span className="ml-2 inline-block w-4">
                          {isSorted &&
                            (sortDirection === "asc" ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            ))}
                        </span>
                      </Button>
                    ) : (
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
export default PokemonsReactTable;
