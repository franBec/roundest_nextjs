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
import { DataTable } from "@/app/pokemons/_components/data-table";
import { DataTablePagination } from "@/components/pagination/data-table-pagination";
import { calculateTotalPages } from "@/app/pokemons/_utils/utils";
import { stringify } from "qs";
import { useBackendLanguage } from "@/components/backend-language/backend-language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  const { selectedBackendLanguage } = useBackendLanguage();
  const backendUrl = selectedBackendLanguage.value;
  const {
    data: response,
    error,
    isError,
    isPending,
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
      <h1 className="text-4xl font-bold">Pokémons</h1>
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
      <div className="w-full flex justify-center items-center space-x-2">
        <span className="font-bold text-xl">Not happy with the results?</span>
        <Button asChild variant="secondary">
          <Link href="/vote">
            <span>Vote!</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
