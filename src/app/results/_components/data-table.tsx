import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Pokemon,
  PokemonSortProperty,
  SortDirection,
} from "@/__generated__/api/roundest/model";
import { columns } from "@/app/results/_components/data-table-columns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DataTableProps {
  data: Pokemon[];
  sortProperty: PokemonSortProperty;
  sortDirection: SortDirection;
  onSort: (property: PokemonSortProperty) => void;
}

export function DataTable({
  onSort,
  sortDirection,
  sortProperty,
  data,
}: DataTableProps) {
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
                        <span className="ml-2">
                          {sortDirection === "ASC" ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </span>
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
