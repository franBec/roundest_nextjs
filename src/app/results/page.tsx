"use client";
import { parseAsInteger, parseAsStringLiteral, useQueryState } from "nuqs";
import {
  PokemonSortProperty,
  SortDirection,
} from "@/__generated__/api/roundest/model";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import Loading from "@/components/v0/loading";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import { DataTable } from "@/app/results/_components/data-table";

const Results = () => {
  const [q] = useQueryState("q");
  const [pageNumber] = useQueryState(
    "pageNumber",
    parseAsInteger.withDefault(1)
  );
  const [sortProperty, setSortProperty] = useQueryState(
    "sortProperty",
    parseAsStringLiteral(Object.values(PokemonSortProperty)).withDefault(
      "votes"
    )
  );
  const [sortDirection, setSortDirection] = useQueryState(
    "sortDirection",
    parseAsStringLiteral(Object.values(SortDirection)).withDefault("DESC")
  );

  const findAllParams = {
    pageNumber: pageNumber - 1,
    pageSize: 5,
    sortProperty,
    sortDirection,
    q: q ?? undefined,
  };

  const {
    data: response,
    error,
    isError,
    isPending,
  } = useFindAll(findAllParams, {
    axios: { baseURL: "http://localhost:8080" },
  });

  const handleSort = (property: PokemonSortProperty) => {
    setSortProperty(property);
    setSortDirection(sortDirection === "ASC" ? "DESC" : "ASC");
  };

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  return (
    <div className="container mx-auto flex flex-col space-y-4">
      <DataTable
        data={response.data}
        sortProperty={sortProperty}
        sortDirection={sortDirection}
        onSort={handleSort}
      />
    </div>
  );
};

export default Results;
