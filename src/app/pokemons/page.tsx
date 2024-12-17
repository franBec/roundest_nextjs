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
import { calculateTotalPages } from "@/app/pokemons/_utils/utils";
import { stringify } from "qs";
import { useBackendLanguage } from "@/components/backend-language/backend-language-context";
import { PokemonsFilterForm } from "@/app/pokemons/_components/pokemons-filter-form";
import { PokemonsTable } from "@/app/pokemons/_components/pokemons-table";
import { PokemonsFooter } from "@/app/pokemons/_components/pokemons-footer";

const Page = () => {
  const [name, setName] = useQueryState("name", parseAsString.withDefault(""));
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
      name,
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

  const handleFilterSubmit = (newName: string) => {
    setName(newName);
    setPageNumber(1);
  };

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  const totalPages = calculateTotalPages(response.data);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Pokémons</h1>
      <PokemonsFilterForm defaultName={name} onSubmit={handleFilterSubmit} />
      <PokemonsTable
        data={response.data.content ?? []}
        onPageChange={setPageNumber}
        onSort={handleSort}
        pageNumber={pageNumber}
        sortDirection={pageSort.at(0)?.split(":").at(1)}
        sortProperty={pageSort.at(0)?.split(":").at(0)}
        totalPages={totalPages}
      />
      <PokemonsFooter />
    </div>
  );
};

export default Page;
