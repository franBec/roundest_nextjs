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
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  handlePageChange?: (newPageNumber: number) => void;
}

export function DataTablePagination({
                                      handlePageChange,
                                      pageNumber,
                                      pageSize,
                                      total,
                                    }: Readonly<TablePaginationProps>) {
  if (
    !pageNumber ||
    pageNumber < 1 ||
    !pageSize ||
    pageSize < 1 ||
    !total ||
    total < 1 ||
    !handlePageChange
  ) {
    return <p>Pagination not available</p>;
  }

  const totalPages = Math.ceil(total / pageSize);

  const shouldShowFirstPage = pageNumber > 3;
  const shouldShowLastPage = pageNumber < totalPages - 2;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(1, pageNumber - 1))}
            aria-disabled={pageNumber === 1}
          />
        </PaginationItem>
        {shouldShowFirstPage && (
          <>
            <PaginationItem>
              <PaginationLink href="#" onClick={() => handlePageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}
        <DataTablePaginationItems
          pageNumber={pageNumber}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
        {shouldShowLastPage && (
          <>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(Math.min(totalPages, pageNumber + 1))
            }
            aria-disabled={pageNumber === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
