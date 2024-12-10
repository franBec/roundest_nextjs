import { PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface TablePaginationItemsProps {
  onPageChange: (page: number) => void;
  pageNumber: number;
  totalPages: number;
}

export function DataTablePaginationItems({
  pageNumber,
  totalPages,
  onPageChange,
}: Readonly<TablePaginationItemsProps>) {
  const maxVisiblePages = 5;

  let startPage = Math.max(1, pageNumber - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const items = [];
  for (let i = startPage; i <= endPage; i++) {
    items.push(
      <PaginationItem key={i}>
        <PaginationLink
          href="#"
          isActive={i === pageNumber}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return <>{items}</>;
}
