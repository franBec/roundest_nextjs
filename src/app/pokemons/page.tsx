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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FindAllParams } from "@/__generated__/api/roundest/model";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

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

  const form = useForm<FindAllParams>({
    defaultValues: {
      name,
    },
  });
  function onSubmit({ name }: FindAllParams) {
    if (!name) {
      name = "";
    }
    setName(name);
    setPageNumber(1);
  }

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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Filter by Pokémon name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Filter</Button>
        </form>
      </Form>
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
