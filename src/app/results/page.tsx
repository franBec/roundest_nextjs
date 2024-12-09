"use client";
import { parseAsInteger, parseAsStringLiteral, useQueryState } from "nuqs";
import {
  PokemonSortProperty,
  SortDirection,
} from "@/__generated__/api/roundest/model";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import Loading from "@/components/v0/loading";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";

const Results = () => {
  const [q] = useQueryState("q");
  const [pageNumber] = useQueryState(
    "pageNumber",
    parseAsInteger.withDefault(1)
  );
  const [sortProperty] = useQueryState(
    "sortProperty",
    parseAsStringLiteral(Object.values(PokemonSortProperty)).withDefault(
      "votes"
    )
  );
  const [sortDirection] = useQueryState(
    "sortDirection",
    parseAsStringLiteral(Object.values(SortDirection)).withDefault("DESC")
  );
  const pageSize = process.env.NEXT_PUBLIC_API_USERS_PAGE_SIZE;

  const findAllParams = {
    pageNumber: pageNumber - 1,
    pageSize: pageSize ? parseInt(pageSize) : undefined,
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

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  return <p>{JSON.stringify(response, null, 2)}</p>;
};
export default Results;
