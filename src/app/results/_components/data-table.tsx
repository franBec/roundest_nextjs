import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { columns } from "./data-table-columns";
import {
  Pokemons,
  PokemonSortProperty,
  SortDirection,
} from "@/__generated__/api/roundest/model";

interface DataTableProps {
  data: Pokemons;
  sortProperty: PokemonSortProperty;
  sortDirection: SortDirection;
  onSort: (property: PokemonSortProperty) => void;
}

export function DataTable({
  data,
  sortProperty,
  sortDirection,
  onSort,
}: DataTableProps) {
  const tableData = data.content ?? [];

  const table = useReactTable({
    data: tableData,
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
                const columnId = header.column.id as PokemonSortProperty;
                const isSorted = sortProperty === columnId;
                const canSort = header.column.getCanSort();

                return (
                  <TableHead
                    key={header.id}
                    onClick={() => {
                      if (canSort) {
                        onSort(columnId);
                      }
                    }}
                    className={`cursor-pointer ${
                      canSort ? "hover:underline" : "cursor-default"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {isSorted && canSort && (
                        <span>{sortDirection === "ASC" ? "↑" : "↓"}</span>
                      )}
                    </div>
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
                  <TableCell
                    key={cell.id}
                    style={{
                      width: cell.column.getSize(),
                    }}
                  >
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
}
