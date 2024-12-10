import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DataTablePaginationItems } from "./data-table-pagination-items";

interface TablePaginationProps {
  onPageChange: (newPageNumber: number) => void;
  pageNumber: number;
  totalPages: number;
}

export function DataTablePagination({
  onPageChange,
  pageNumber,
  totalPages,
}: Readonly<TablePaginationProps>) {
  const shouldShowFirstPage = pageNumber > 3;
  const shouldShowLastPage = pageNumber < totalPages - 2;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(Math.max(1, pageNumber - 1))}
            aria-disabled={pageNumber === 1}
          />
        </PaginationItem>
        {shouldShowFirstPage && (
          <>
            <PaginationItem>
              <PaginationLink href="#" onClick={() => onPageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}
        <DataTablePaginationItems
          pageNumber={pageNumber}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
        {shouldShowLastPage && (
          <>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink href="#" onClick={() => onPageChange(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => onPageChange(Math.min(totalPages, pageNumber + 1))}
            aria-disabled={pageNumber === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
