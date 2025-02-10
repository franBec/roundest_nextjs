"use client";
import { useFindAll } from "@/__generated__/api/roundest/roundestApi";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import PokemonCandidates from "@/app/vote/_components/pokemon-candidates";
import { useBackendLanguage } from "@/components/backend-language/backend-language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  const { selectedBackendLanguage } = useBackendLanguage();
  const backendUrl = selectedBackendLanguage.value;
  const pageSize = 2;
  const {
    data: response,
    error,
    isError,
    isPending,
    isRefetching,
    refetch,
  } = useFindAll(
    {
      pageSize,
      random: true,
    },
    {
      axios: { baseURL: backendUrl },
      query:{
        refetchOnWindowFocus: false
      }
    }
  );

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold">Who&#39;s Roundest?</h1>
      {isError && <AxiosErrorAlert axiosError={error} />}
      {!isError && (
        <PokemonCandidates
          voteUrl={backendUrl}
          candidatesSize={pageSize}
          isLoading={isPending || isRefetching}
          pokemons={response?.data.content}
          refetch={refetch}
        />
      )}
      <div className="w-full flex justify-center items-center space-x-2">
        <span className="font-bold text-xl">Who&#39;s winning?</span>
        <Button asChild variant="secondary">
          <Link href="/pokemons">
            <span>See Pokemons</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
