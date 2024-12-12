"use client";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import Loading from "@/components/v0/loading";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import { DataTable } from "@/app/results/_components/data-table";
import { DataTablePagination } from "@/components/pagination/data-table-pagination";
import { calculateTotalPages } from "@/app/results/_utils/utils";
import {
  Backends,
  BackendSelect,
} from "@/components/backend-select/backend-select";
import { useState } from "react";
import { stringify } from "qs";

const Page = () => {
  const [name] = useQueryState("name");
  const [pageNumber, setPageNumber] = useQueryState(
    "pageNumber",
    parseAsInteger.withDefault(1)
  );
  const [pageSort, setPageSort] = useQueryState(
    "pageSort",
    parseAsArrayOf(parseAsString).withDefault(["votes:desc"])
  );

  const [firstBackend] = Array.from(Backends.entries());
  const [backendUrl, setBackendUrl] = useState<string>(firstBackend[1]);

  const {
    data: response,
    error,
    isError,
    isPending,
    isRefetching,
    refetch,
  } = useFindAll(
    {
      name: name ?? undefined,
      pageNumber: pageNumber - 1,
      pageSize: 5,
      pageSort,
    },
    {
      axios: {
        baseURL: backendUrl,
        paramsSerializer: params => {
          return stringify(params, { indices: false });
        },
      },
    }
  );

  const handleSort = (property: string, direction: string) => {
    setPageSort([property + ":" + direction]);
  };

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  const totalPages = calculateTotalPages(response.data);
  return (
    <div className="container mx-auto space-y-4">
      <div className="flex flex-col items-center">
        <BackendSelect
          onSelectCallback={setBackendUrl}
          refetch={refetch}
          isPending={isPending}
          isRefetching={isRefetching}
        />
      </div>
      <div className="space-y-4">
        <DataTable
          data={response.data.content ?? []}
          onSort={handleSort}
          sortProperty={pageSort.at(0)?.split(":").at(0)}
          sortDirection={pageSort.at(0)?.split(":").at(1)}
        />
        {totalPages && (
          <DataTablePagination
            onPageChange={setPageNumber}
            pageNumber={pageNumber}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
